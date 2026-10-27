import React from 'react';
import { X, Award, Users, BookOpen, Star, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InfoModalProps {
  type: string | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose, onOpenApply }) => {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'Courses':
        return {
          icon: <BookOpen className="w-6 h-6 text-[#64CEFB]" />,
          title: 'Signature Programs',
          subtitle: 'Immersive 12-week design leadership masterclasses',
          items: [
            {
              title: 'Product Leadership & Systems',
              level: 'Advanced',
              desc: 'Architect design systems that scale across thousands of engineers and global multi-platform products.',
            },
            {
              title: 'Executive UX & Business Strategy',
              level: 'Director Track',
              desc: 'Master product strategy, unit economics, executive alignment, and board-level storytelling.',
            },
            {
              title: 'AI-Native Product Architecture',
              level: 'Emerging Tech',
              desc: 'Design agentic workflows, conversational interfaces, and intelligent spatial computing systems.',
            },
          ],
        };
      case 'Instructors':
        return {
          icon: <Users className="w-6 h-6 text-[#64CEFB]" />,
          title: 'World-Class Instructors',
          subtitle: 'Learn directly from VP and Head of Design practitioners',
          items: [
            {
              title: 'Elena Vance',
              level: 'Former VP Design @ Stripe',
              desc: 'Pioneered payment interfaces and modern component architectures used by millions.',
            },
            {
              title: 'Marcus Chen',
              level: 'Head of Product Design @ Figma',
              desc: 'Directs multi-player collaboration tools and design tooling ecosystem.',
            },
            {
              title: 'Siddharth Patel',
              level: 'Staff Design Director @ Airbnb',
              desc: 'Specialist in hyper-scale design frameworks and emotional design craft.',
            },
          ],
        };
      case 'Testimonials':
        return {
          icon: <Star className="w-6 h-6 text-[#64CEFB]" />,
          title: 'Alumni Impact',
          subtitle: 'Over 8,000 designers promoted to Lead, Staff & Director roles',
          items: [
            {
              title: 'Sarah K. — Now Head of Design at Series B Fintech',
              level: 'Cohort 11 Alumni',
              desc: '"DesignPro altered the trajectory of my career. The executive communication skills got me my promotion within 4 months."',
            },
            {
              title: 'David T. — Senior Principal Designer at Uber',
              level: 'Cohort 9 Alumni',
              desc: '"The systems thinking and rigorous feedback loops from real leaders are unparalleled in design education."',
            },
          ],
        };
      case 'About Us':
        return {
          icon: <Award className="w-6 h-6 text-[#64CEFB]" />,
          title: 'About DesignPro',
          subtitle: 'Shaping the next decade of digital craftsmanship',
          items: [
            {
              title: 'Our Mission',
              level: 'Global Vision',
              desc: 'We bridge the gap between individual contributor design and transformative product leadership on the world stage.',
            },
            {
              title: 'Rigorous Peer Network',
              level: 'Selective Community',
              desc: 'Every cohort is hand-selected to ensure peer learning from fellow high-caliber designers and strategists.',
            },
          ],
        };
      case 'Blog':
        return {
          icon: <BookOpen className="w-6 h-6 text-[#64CEFB]" />,
          title: 'Design Insights & Field Notes',
          subtitle: 'Weekly deep dives into product design craft and leadership',
          items: [
            {
              title: 'The Anatomy of High-Leverage Design Decisions',
              level: 'Leadership',
              desc: 'How principal designers influence roadmaps before PRDs are even written.',
            },
            {
              title: 'Why Most Design Systems Fail to Scale',
              level: 'Systems',
              desc: 'Common governance pitfalls and how top orgs build resilient design pipelines.',
            },
          ],
        };
      case 'Contact us':
      default:
        return {
          icon: <Mail className="w-6 h-6 text-[#64CEFB]" />,
          title: 'Contact Admissions & Advisory',
          subtitle: 'Speak with our admissions counselors or corporate partnership team',
          items: [
            {
              title: 'Admissions Office',
              level: 'admissions@designpro.education',
              desc: 'Reach out for syllabus inquiries, tuition assistance, and cohort application schedules.',
            },
            {
              title: 'Enterprise & Team Training',
              level: 'partnerships@designpro.education',
              desc: 'Custom cohort training tailored for scale-up design and product teams.',
            },
          ],
        };
    }
  };

  const content = getContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-white"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#64CEFB] to-transparent opacity-80" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/60 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
              {content.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">{content.title}</h2>
              <p className="text-white/60 text-xs sm:text-sm">{content.subtitle}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {content.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#64CEFB]/10 text-[#64CEFB] border border-[#64CEFB]/20 shrink-0">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-xs sm:text-sm text-white/70 hover:text-white px-4 py-2 cursor-pointer transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
            >
              Apply for Next Enrollment
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InfoModal;
