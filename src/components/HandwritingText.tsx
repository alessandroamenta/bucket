"use client";

import { useEffect, useRef } from "react";

export default function HandwritingText() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = length.toString();
    }
  }, []);

  return (
    <div className="handwriting-svg-container">
      <svg viewBox="0 0 451.663 34.43" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" fill="none" strokeWidth="1">
          <path
            ref={pathRef}
            className="handwriting-path"
            d="M 311.143 16.48 L 310.943 17.36 L 311.943 16.4 A 14.737 14.737 0 0 0 312.491 15.977 Q 312.766 15.754 313.063 15.496 A 25.33 25.33 0 0 0 313.263 15.32 Q 313.983 14.68 314.543 14.2 A 3.545 3.545 0 0 1 314.808 14.021 Q 315.061 13.865 315.403 13.7 A 14.426 14.426 0 0 1 316.3 13.304 A 12.934 12.934 0 0 1 316.463 13.24 Q 316.983 13.04 317.223 13 A 0.842 0.842 0 0 1 317.281 12.984 Q 317.421 12.948 317.763 12.89 A 22.329 22.329 0 0 1 317.823 12.88 Q 318.19 12.819 318.675 12.804 A 10.406 10.406 0 0 1 318.983 12.8 A 3.16 3.16 0 0 1 319.571 12.852 Q 320.057 12.944 320.403 13.2 A 2.871 2.871 0 0 1 320.805 13.568 Q 321.138 13.93 321.463 14.48 Q 321.835 15.191 321.835 16.059 A 4.264 4.264 0 0 1 321.823 16.38 Q 321.743 17.44 321.183 18.36 Q 320.999 18.507 320.816 18.738 A 3.424 3.424 0 0 0 320.783 18.78 A 1.739 1.739 0 0 0 320.695 18.904 Q 320.583 19.08 320.583 19.2"
          />
        </g>
      </svg>
    </div>
  );
}
