import { forwardRef } from "react";
import Loading from "../Common/Loader/loading";
import { LoadingBox } from "./styles";

interface LoadingContainerProps {
  children: React.ReactNode;
}

export type Ref = HTMLDivElement;

// eslint-disable-next-line react/display-name
export const LoadingContainer = forwardRef<Ref, LoadingContainerProps>(
  ({ children }, ref) => <LoadingBox ref={ref}>{children}</LoadingBox>
);

const LightSaberLoader = () => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  );
};

export default LightSaberLoader;
