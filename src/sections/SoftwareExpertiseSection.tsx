import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Modal } from '../components/Modal';

const softwareItems = [
  {
    num: "01",
    name: "AppliCad Roof Wizard",
    icon: "/Applicad.png",
    desc: "Precision roofing design and quantity takeoff behind 6,000+ completed roofing plans.",
    images: {
      left1: "/Software work images/Applicad/1.webp",
      left2: "/Software work images/Applicad/2.webp",
      right: "/Software work images/Applicad/3.webp"
    }
  },
  {
    num: "02",
    name: "Virtual Estimator",
    icon: "/virtual Estimator.jpg",
    desc: "Detailed cost estimating and budget forecasting for construction project planning.",
    images: {
      left1: "/Software work images/Virtual Estimator/1.jpeg",
      left2: "/Software work images/Virtual Estimator/2.jpeg",
      right: "/Software work images/Virtual Estimator/3.jpeg"
    }
  },
  {
    num: "03",
    name: "Bluebeam Revu",
    icon: "/Bluebeam/Primary logo.svg",
    desc: "PDF markup, measurement, and digital takeoff for reviewing construction drawings.",
    images: {
      left1: "/Software work images/Bluebeam/1.jpeg",
      left2: "/Software work images/Bluebeam/2.jpeg",
      right: "/Software work images/Bluebeam/3.jpeg"
    }
  },
  {
    num: "04",
    name: "MudShark",
    icon: "/mudshark.png",
    desc: "Earthworks estimating software used across 700+ excavation plans.",
    images: {
      left1: "/Software work images/Mudshark/1.jpeg",
      left2: "/Software work images/Mudshark/2.jpeg",
      right: "/Software work images/Mudshark/3.jpeg"
    }
  },
  {
    num: "05",
    name: "iScaf (Scaffolding Software)",
    icon: "/Scanffolding_software_iScof.png",
    desc: "Scaffold design and estimating for safe, compliant site planning.",
    images: {
      left1: "/Software work images/Iscaf (Scaffolding)/1.jpeg",
      left2: "/Software work images/Iscaf (Scaffolding)/2.jpeg",
      right: "/Software work images/Iscaf (Scaffolding)/3.jpeg"
    }
  },
  {
    num: "06",
    name: "Revit",
    icon: "/autodesk-revit-icon-seeklogo.svg",
    desc: "Building information modeling for accurate, coordinated architectural documentation.",
    images: {
      left1: "/Software work images/Revit/1.jpeg",
      left2: "/Software work images/Revit/2.jpeg",
      right: "/Software work images/Revit/3.jpeg"
    }
  },
  {
    num: "07",
    name: "AutoCAD",
    icon: "/autocad-seeklogo.svg",
    desc: "2D & 3D drafting and detailing across residential and light-commercial construction drawings.",
    images: {
      left1: "/Software work images/Autocad/1.jpeg",
      left2: "/Software work images/Autocad/2.jpeg",
      right: "/Software work images/Autocad/3.jpeg"
    }
  },
  {
    num: "08",
    name: "SketchUp",
    icon: "/sketchup-seeklogo.svg",
    desc: "Fast 3D concept modeling for early-stage design and client walkthroughs.",
    images: {
      left1: "/Software work images/sketchup/1.jpeg",
      left2: "/Software work images/sketchup/2.jpeg",
      right: "/Software work images/sketchup/3.jpeg"
    }
  },
  {
    num: "09",
    name: "Buildxact",
    icon: "/BuildXact.png",
    desc: "Job costing and estimation workflows for streamlined project budgeting.",
    images: {
      left1: "/Software work images/BuildxAct/1.jpeg",
      left2: "/Software work images/BuildxAct/2.jpeg",
      right: "/Software work images/BuildxAct/3.jpeg"
    }
  },
  {
    num: "10",
    name: "AroFlo CRM",
    icon: "/Artflow.png",
    desc: "Job management and client workflow tracking from brief to sign-off.",
    images: {
      left1: "/Software work images/Aroflo/1.jpeg",
      left2: "/Software work images/Aroflo/2.jpeg",
      right: "/Software work images/Aroflo/3.jpeg"
    }
  },
  {
    num: "11",
    name: "Microsoft Office",
    icon: "/Microsoft_Office.svg",
    desc: "Reporting, documentation, and client-ready deliverables.",
    images: {
      left1: "/Software work images/Microsoft Office/1.jpeg",
      left2: "/Software work images/Microsoft Office/2.jpeg",
      right: "/Software work images/Microsoft Office/3.jpeg"
    }
  },
  {
    num: "12",
    name: "OnScreen Takeoff",
    icon: "/On-Screen Takeoff.webp",
    desc: "On-screen digital quantity takeoff measured directly from uploaded construction plans.",
    images: {
      left1: "/Software work images/On-screen Takeoff/1.jpeg",
      left2: "/Software work images/On-screen Takeoff/2.jpeg",
      right: "/Software work images/On-screen Takeoff/3.jpeg"
    }
  }
];

export function SoftwareExpertiseSection() {
  const [selectedSoftware, setSelectedSoftware] = useState<typeof softwareItems[0] | null>(null);
  
  const selectedImages = selectedSoftware?.images;

  return (
    <section id="software" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn delay={0}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,9vw,120px)] leading-none tracking-normal mb-16 sm:mb-20 md:mb-28">
          Software Expertise
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {softwareItems.map((item, i) => (
          <FadeIn key={item.num} delay={i * 0.06} y={20}>
            <div 
              onClick={() => setSelectedSoftware(item)}
              className="bg-[#F3F4F6] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-300 shadow-[8px_8px_20px_rgba(163,177,198,0.35),-8px_-8px_20px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[12px_12px_28px_rgba(163,177,198,0.4),-12px_-12px_28px_rgba(255,255,255,0.95)] active:translate-y-0 active:scale-[0.97] active:shadow-[inset_6px_6px_14px_rgba(163,177,198,0.4),inset_-6px_-6px_14px_rgba(255,255,255,0.8)] active:duration-150 h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#0C0C0C] text-xs opacity-40 tracking-widest font-bold">{item.num}</span>
                <img src={item.icon} alt={item.name} loading="lazy" decoding="async" className="h-9 sm:h-10 object-contain" />
              </div>
              <h3 className="text-[#0C0C0C] font-medium uppercase text-lg sm:text-xl mb-2">
                {item.name}
              </h3>
              <p className="text-[#0C0C0C] font-light text-sm opacity-60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedSoftware} 
        onClose={() => setSelectedSoftware(null)}
        title={selectedSoftware ? `${selectedSoftware.name} - Work by Vivek` : ""}
      >
        {selectedImages && (
          <div className="flex flex-col md:flex-row w-full gap-4 min-h-[300px]">
            {/* Left Column - 40% */}
            <div className="flex flex-col w-full md:w-[40%] gap-4">
              <img 
                src={selectedImages.left1} 
                alt={`${selectedSoftware.name} detail 1`} 
                loading="lazy"
                decoding="async"
                className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
              <img 
                src={selectedImages.left2} 
                alt={`${selectedSoftware.name} detail 2`} 
                loading="lazy"
                decoding="async"
                className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-grow"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
            
            {/* Right Column - 60% */}
            <div className="w-full md:w-[60%]">
              <img 
                src={selectedImages.right} 
                alt={`${selectedSoftware.name} main`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                style={{ minHeight: "300px" }}
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
