import { StageDirector } from "./components/director/StageDirector";
import { StageRenderer } from "./components/director/StageRenderer";
import { DirectorConsole } from "./components/director/DirectorConsole";
import { BackgroundManager } from "./components/BackgroundManager";
import { ViewportFrame } from "./components/ViewportFrame";
import { ControlDock } from "./components/ControlDock";

export default function Home() {
  return (
    <StageDirector>
      <main className="stage-shell">
        <BackgroundManager />
        <ViewportFrame>
          <StageRenderer />
        </ViewportFrame>
        <ControlDock />
        <DirectorConsole />
      </main>
    </StageDirector>
  );
}