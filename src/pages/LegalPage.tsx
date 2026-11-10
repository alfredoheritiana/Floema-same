import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  policy: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ policy }) => {
  const { navigate } = useApp();

  const getPolicyDetails = () => {
    switch (policy) {
      case 'whistleblowing':
        return {
          title: 'Whistleblowing Channel',
          subtitle: 'Canal de Denúncias',
          body: [
            'In accordance with Portuguese Law no. 93/2021 and European Union Directive 2019/1937, Floema provides an autonomous, confidential, and secure reporting channel for irregularities, compliance violations, and environmental concerns.',
            'Reports can be submitted confidentially to compliance@floema.pt or by physical mail addressed to the Compliance Officer at our headquarters in Condeixa-a-Velha, Portugal.',
            'Floema guarantees strict confidentiality, protection of personal data, and non-retaliation against whistleblowers acting in good faith.'
          ]
        };
      case 'management-system-policy':
        return {
          title: 'Management System Policy',
          subtitle: 'Política do Sistema de Gestão',
          body: [
            'Floema is committed to operational excellence, environmental stewardship, and continuous quality improvement across all design, manufacturing, and assembly operations.',
            'Our integrated management system aligns with international standards ISO 9001 (Quality Management) and ISO 14001 (Environmental Management).',
            'We prioritize closed-loop circular raw materials, strict chemical avoidance in public spaces, and the highest standards of occupational health and safety.'
          ]
        };
      case 'cookie-policy':
        return {
          title: 'Cookie Policy',
          subtitle: 'Política de Cookies',
          body: [
            'This website uses technical and performance cookies necessary to ensure smooth navigation, language preference retention, and anonymous traffic measurement.',
            'We do not sell personal data to third parties. Cookies may be managed or disabled directly through your browser security settings.'
          ]
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          subtitle: 'Termos e Condições',
          body: [
            'All technical drawings, product models, imagery, and specifications presented on this site are property of Floema or their respective rights holders.',
            'This deployment functions as an internal reference reconstruction and design audit prototype.'
          ]
        };
      default:
        return {
          title: 'Privacy Policy',
          subtitle: 'Política de Privacidade',
          body: [
            'Floema respects the privacy of our visitors and specifiers in accordance with the General Data Protection Regulation (GDPR - EU 2016/679).',
            'Personal data provided through our enquiry and quotation forms is used exclusively to dispatch requested technical specifications, CAD files, and commercial proposals.',
            'You may exercise your rights of access, rectification, or erasure at any time by contacting info@floema.pt.'
          ]
        };
    }
  };

  const { title, subtitle, body } = getPolicyDetails();

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-32 px-6 sm:px-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/en')}
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#988F8B] hover:text-[#241F21] cursor-pointer mb-8 transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Back to Home</span>
      </button>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#241F21]/8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B] block mb-2">
            {subtitle}
          </span>
          <h1 className="editorial-display text-3xl sm:text-4xl text-[#241F21]">
            {title}
          </h1>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#524945] leading-relaxed pt-4 border-t border-[#241F21]/10">
          {body.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-[#241F21]/10 text-xs font-mono text-[#988F8B]">
          Floema® • Condeixa-a-Velha, Portugal
        </div>
      </div>
    </div>
  );
};
