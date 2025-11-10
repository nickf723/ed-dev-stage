// In app/components/BackgroundManager.tsx

"use client";
import { useStage } from "./director/StageDirector"; // <-- Import useStage
import "@/app/styles/backgrounds.css";

// No need for BackgroundType, as the context provides the string
// export type BackgroundType = "aurora" | "grid" | "stars" | "solid";

export function BackgroundManager() {
  // Get the global backgroundMode from the context
  const { backgroundMode } = useStage();

  // The local state and useEffect are no longer needed
  // const [activeBackground, setActiveBackground] = useState<BackgroundType>("aurora");
  // useEffect(() => { ... }, []);

  return (
    <div className="background-manager">
      {/* Use the backgroundMode from the context */}
      <div className={`background-layer bg-${backgroundMode}`} />
    </div>
  );
}