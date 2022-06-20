import { Link } from "gatsby";
import * as React from "react";

const Footer = () => (
  <>
    <svg>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
    <nav className="border-t-2 border-orange-900 grid grid-cols-2">
      <Link to="/illustrations/" className="max-w-xs">
        <svg viewBox="0 0 200 200" className="fill-orange-400">
          <path d="m 66.716236,59.920834 c 31.148323,-9.965425 65.721634,-21.260054 92.722244,-8.192108 26.85747,13.03752 46.31158,50.345034 35.49959,72.347584 -10.66886,22.03301 -51.43452,28.66845 -83.6832,31.84264 -32.248697,3.17418 -55.811084,2.79456 -76.316713,-9.14999 C 14.575693,134.85486 -2.6777123,111.1298 2.5703401,94.887655 7.8183927,78.645498 35.541757,70.009274 66.716236,59.920834 Z" />
        </svg>
        <span className="pt-4 text-3xl font-bold hover:text-orange-900">
          Illustrations
        </span>
      </Link>
      <Link to="/data/" className="max-w-xs justify-self-end">
        <svg viewBox="0 0 200 200" className="fill-orange-400">
          <path
            d="M54.2,-29.8C64.6,-13.3,63.5,11.4,52.6,30.1C41.6,48.9,20.8,61.7,-3.1,63.5C-26.9,65.2,-53.9,56,-64.8,37.2C-75.7,18.5,-70.6,-9.7,-57.1,-28C-43.7,-46.4,-21.8,-54.9,0,-54.9C21.9,-54.9,43.8,-46.4,54.2,-29.8Z"
            transform="translate(75 75)"
          />
        </svg>
        <span className="pr-20 pb-12 text-3xl font-bold hover:text-orange-900">
          Data
        </span>
      </Link>
    </nav>
    <footer className="text-base text-center text-orange-900">
      © {new Date().getFullYear()}{" "}
      <a href="https://ashleyblewer.com">Ashley Blewer</a>
    </footer>
  </>
);

export default Footer;
