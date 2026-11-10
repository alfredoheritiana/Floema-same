import React from 'react';
import { useApp } from '../context/AppContext';

export const RichFooter: React.FC = () => {
  const { navigate } = useApp();

  return (
    <footer
      data-component="footer"
      className="bg-[#E9E778] text-[#241F21] pt-16 pb-12 overflow-hidden relative border-t border-[#241F21]/15"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid: Floema Giant Symbol + 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[#241F21]/20">
          {/* Left Column: Big Floema Brand Symbol */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <svg
              className="w-40 sm:w-56 h-auto"
              viewBox="0 0 598 854"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#floema_footer_clip)">
                <path
                  d="M583.303 0H0V843.954H139.707V315.042C139.707 277.626 185.281 258.95 211.898 285.354L436.454 508.111L525.2 420.077L302.46 199.058C275.843 172.655 294.67 127.446 332.388 127.446H583.367V0H583.303Z"
                  fill="#241F21"
                />
                <path
                  d="M307.352 795.664C307.352 828.508 280.865 854.01 246.717 854.01C212.569 854.01 186.082 828.444 186.082 795.664C186.082 762.885 212.569 737.576 246.717 737.576C280.865 737.576 307.352 763.143 307.352 795.664ZM198.806 795.664C198.806 822.197 219.775 842.74 246.782 842.74C273.788 842.74 294.498 822.197 294.498 795.664C294.498 769.132 273.788 748.846 246.782 748.846C219.775 748.846 198.806 769.132 198.806 795.664ZM259.376 799.915C257.364 800.688 256.325 801.911 256.325 803.908C256.325 805.131 257.104 806.677 257.818 807.9L271.971 826.962H256.844L239.446 802.684V826.962H226.073V764.56H249.573C262.427 764.56 271.776 772.545 271.776 783.622C271.776 791.414 266.972 797.403 259.376 799.915Z"
                  fill="#241F21"
                />
              </g>
              <defs>
                <clipPath id="floema_footer_clip">
                  <rect width="598" height="854" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-xs font-mono tracking-wider opacity-80">
              Spaces for people, made for life.
            </div>
          </div>

          {/* Right Area: Three Location Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs leading-relaxed">
            {/* Headquarters */}
            <div className="space-y-3">
              <h5 className="font-semibold text-sm tracking-tight border-b border-[#241F21]/20 pb-2">
                Headquarters
              </h5>
              <div className="space-y-1 font-mono text-[12px] opacity-90">
                <p>Terras Velhas, s/n, Alcabideque</p>
                <p>3150-211 Condeixa-a-Velha, Portugal</p>
                <p className="pt-2">info@floema.pt</p>
                <p>+351 239 561 392</p>
                <p className="text-[10px] text-[#241F21]/70">Call to a national landline</p>
              </div>
            </div>

            {/* Production */}
            <div className="space-y-3">
              <h5 className="font-semibold text-sm tracking-tight border-b border-[#241F21]/20 pb-2">
                Production
              </h5>
              <div className="space-y-1 font-mono text-[12px] opacity-90">
                <p>Zona Industrial de Condeixa-a-Nova</p>
                <p>Lote 41</p>
                <p>3150-194 Sebal, Portugal</p>
              </div>
            </div>

            {/* Floema Spain */}
            <div className="space-y-3">
              <h5 className="font-semibold text-sm tracking-tight border-b border-[#241F21]/20 pb-2">
                Floema Spain
              </h5>
              <div className="space-y-1 font-mono text-[12px] opacity-90">
                <p>San Martin de Borines</p>
                <p>33583 Borines</p>
                <p>Asturias, España</p>
                <p className="pt-2">info@floema.es</p>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized Wireframe SVGs Strip */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center border-b border-[#241F21]/20 opacity-80">
          <div className="flex flex-col items-center">
            <img
              src="/assets/floema/table-wireframe-graphic.svg"
              alt="Table wireframe"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/floema/bike-station-wireframe-graphic.svg"
              alt="Bike station wireframe"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/floema/chair-wireframe-graphic.svg"
              alt="Chair wireframe"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/floema/waterfountain-wireframe-graphic.svg"
              alt="Water fountain wireframe"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Legal Links, Socials & Büro Credit */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs border-b border-[#241F21]/20">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-medium">
            <button
              onClick={() => navigate('/en/legal/whistleblowing')}
              className="hover:underline cursor-pointer"
            >
              Whistleblowing Channel
            </button>
            <button
              onClick={() => navigate('/en/legal/management-system-policy')}
              className="hover:underline cursor-pointer"
            >
              Management System Policy
            </button>
            <button
              onClick={() => navigate('/en/legal/cookie-policy')}
              className="hover:underline cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => navigate('/en/legal/terms')}
              className="hover:underline cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate('/en/legal/privacy')}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          {/* Socials & Credit */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://pt.linkedin.com/company/floema"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-75 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6.15 9.975V18H8.7V9.975H6.15ZM6 7.425C6 8.25 6.6 8.85 7.425 8.85C8.25 8.85 8.85 8.25 8.85 7.425C8.85 6.6 8.25 6 7.425 6C6.675 6 6 6.6 6 7.425ZM15.45 18H17.85V13.05C17.85 10.575 16.35 9.75 14.925 9.75C13.65 9.75 12.75 10.575 12.525 11.1V9.975H10.125V18H12.675V13.725C12.675 12.6 13.425 12 14.175 12C14.925 12 15.45 12.375 15.45 13.65V18Z"
                    fill="#241F21"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/floemasinaletica/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:opacity-75 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 6C15.3 6 18 8.7 18 12C18 15 15.825 17.55 12.825 18V13.725H14.25L14.55 12H12.9V10.875C12.9 10.425 13.125 9.975 13.875 9.975H14.625V8.475C14.625 8.475 13.95 8.325 13.275 8.325C11.925 8.325 11.025 9.15 11.025 10.65V12H9.525V13.725H11.025V17.925C8.175 17.475 6 15 6 12C6 8.7 8.7 6 12 6Z"
                    fill="#241F21"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/floema.madeforlife/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:opacity-75 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM14.55 6.9H9.45C8.85 6.975 8.55 7.05 8.325 7.125C8.025 7.2 7.8 7.35 7.575 7.575C7.39696 7.75304 7.31284 7.93108 7.21116 8.14628C7.18437 8.20299 7.15628 8.26244 7.125 8.325C7.1134 8.35981 7.1 8.39641 7.08564 8.43564C7.00718 8.65 6.9 8.94282 6.9 9.45V14.55C6.975 15.15 7.05 15.45 7.125 15.675C7.2 15.975 7.35 16.2 7.575 16.425C7.75304 16.603 7.93108 16.6872 8.14628 16.7888C8.20304 16.8157 8.26239 16.8437 8.325 16.875C8.35981 16.8866 8.39641 16.9 8.43564 16.9144C8.65 16.9928 8.94282 17.1 9.45 17.1H14.55C15.15 17.025 15.45 16.95 15.675 16.875C15.975 16.8 16.2 16.65 16.425 16.425C16.603 16.247 16.6872 16.0689 16.7888 15.8537C16.8156 15.797 16.8437 15.7376 16.875 15.675C16.8866 15.6402 16.9 15.6036 16.9144 15.5644C16.9928 15.35 17.1 15.0572 17.1 14.55V9.45C17.025 8.85 16.95 8.55 16.875 8.325C16.8 8.025 16.65 7.8 16.425 7.575C16.247 7.39696 16.0689 7.31284 15.8537 7.21116C15.797 7.18439 15.7375 7.15625 15.675 7.125C15.6402 7.1134 15.6036 7.1 15.5644 7.08564C15.35 7.00718 15.0572 6.9 14.55 6.9ZM12 8.775C10.2 8.775 8.775 10.2 8.775 12C8.775 13.8 10.2 15.225 12 15.225C13.8 15.225 15.225 13.8 15.225 12C15.225 10.2 13.8 8.775 12 8.775ZM16.05 8.7C16.05 9.11421 15.7142 9.45 15.3 9.45C14.8858 9.45 14.55 9.11421 14.55 8.7C14.55 8.28578 14.8858 7.95 15.3 7.95C15.7142 7.95 16.05 8.28578 16.05 8.7Z"
                    fill="#241F21"
                  />
                </svg>
              </a>
            </div>

            <a
              href="https://burocratik.com/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] underline opacity-80 hover:opacity-100"
            >
              Made by Büro
            </a>
          </div>
        </div>

        {/* Sponsor Marks & Distinctions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 flex-wrap">
            <img
              src="/assets/floema/pme-lider-25.svg"
              alt="PME Líder '25"
              className="h-8 w-auto"
            />
            <img
              src="/assets/floema/centro-2030.svg"
              alt="CENTRO 2030"
              className="h-7 w-auto"
            />
            <img
              src="/assets/floema/prr.svg"
              alt="PRR"
              className="h-7 w-auto"
            />
          </div>

          <div className="text-right text-[11px] font-mono text-[#241F21]/70">
            Floema® • Reference Reconstruction Prototype
          </div>
        </div>
      </div>
    </footer>
  );
};
