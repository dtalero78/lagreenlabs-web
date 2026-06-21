import { Composition } from "remotion";
import { IpsAutomation, DURATION_IN_FRAMES, FPS, WIDTH, HEIGHT } from "./IpsAutomation";

export const RemotionRoot = () => {
  return (
    <Composition
      id="IpsAutomation"
      component={IpsAutomation}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
