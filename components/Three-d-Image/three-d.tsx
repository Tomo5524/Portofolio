import {
  useEffect,
  useRef,
  useCallback,
  RefObject,
  MutableRefObject,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useLoadingContext } from "../../context/loading-context";
import Loading from "../Common/Loader/loader";
import { loadGLTFModel } from "../lib/model";
import { LoadingContainer } from "./three-d-loader";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export default function VoxelForrest() {
  const refContainer: RefObject<HTMLDivElement> = useRef(null);
  // const [loading, setLoading] = useState(true);
  const { loading, setLoading } = useLoadingContext();
  const refRenderer: MutableRefObject<THREE.WebGLRenderer | null> =
    useRef(null);
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      let scene = new THREE.Scene();

      //  const target = new THREE.Vector3(0, -0.1, 0.3);
      let target = new THREE.Vector3(0, 2, 0);
      let initialCameraPosition = new THREE.Vector3(
        200 * Math.sin(0.5 * Math.PI),
        10,
        200 * Math.cos(0.5 * Math.PI)
      );

      // if scH is equal or greater than 640, scale up. If not scale down.
      let scale = scH >= 640 ? scH * 0.01 : scH * 0.012;
      let camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.1,
        3000
      );

      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      let ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      const fallback = () => {
        scene = new THREE.Scene();
        target = new THREE.Vector3(0, -0.1, 0.3);
        initialCameraPosition = new THREE.Vector3(
          20 * Math.sin(0.5 * Math.PI),
          10,
          20 * Math.cos(0.5 * Math.PI)
        );
        // if scH is equal or greater than 640, scale up. If not scale down.
        scale = scH >= 640 ? scH * 0.0013 : scH * 0.0019;
        camera = new THREE.OrthographicCamera(
          -scale,
          scale,
          scale,
          -scale,
          0.1,
          3000
        );
        camera.position.copy(initialCameraPosition);
        camera.lookAt(target);
        ambientLight = new THREE.AmbientLight(0xcccccc, 1);
        scene.add(ambientLight);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.target = target;

        loadGLTFModel(scene, "/computer.glb", {
          receiveShadow: false,
          castShadow: false,
        }).then(() => {
          animate();
          setLoading(false);
        });
      };

      loadGLTFModel(scene, "/forest_house.glb", {
        receiveShadow: false,
        castShadow: false,
      })
        .then(() => {
          animate();
          setLoading(false);
        })
        .catch(() => {
          // older iOS version spits the following error
          // Unhandled Promise Rejection: Error: THREE.GLTFLoader: AVIF required by asset but unsupported.
          fallback();
        });

      let req: number | null = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 13;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req!);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <LoadingContainer ref={refContainer}>
      {loading && <Loading />}
    </LoadingContainer>
    // for debugging loading state
    // <Loading />
  );
}
