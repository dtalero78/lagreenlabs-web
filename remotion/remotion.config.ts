import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// h264 con pixel format compatible para autoplay en navegadores.
Config.setPixelFormat("yuv420p");
