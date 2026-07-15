import { Code2 } from "lucide-react";
import { profile } from "../../data/profile";

export function PortraitFrame() {
  return (
    <figure className="portrait-wrap">
      <div className="portrait-index" aria-hidden="true">
        01 / 03
      </div>
      <div className="portrait-frame">
        <img
          src={profile.portraitUrl}
          alt={`${profile.name}, frontend engineer based in Cairo`}
          className="h-full w-full object-cover object-[center_18%]"
          width={840}
          height={1050}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <figcaption className="portrait-caption">
        <span className="portrait-icon" aria-hidden="true">
          <Code2 className="h-5 w-5" />
        </span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.title}</small>
        </span>
      </figcaption>
    </figure>
  );
}
