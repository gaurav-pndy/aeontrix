import {
  Phone,
  MessageSquare,
  Users,
  Mail,
  Bot,
  BarChart3,
  Clock,
  User,
  Zap,
  Settings,
} from "lucide-react";
import {
  FaChartLine,
  FaHashtag,
  FaHospitalUser,
  FaLinkedinIn,
  FaPhotoVideo,
  FaQuestion,
  FaRegClone,
  FaRobot,
  FaShoppingCart,
  FaStore,
  FaTools,
  FaUserShield,
} from "react-icons/fa";
import {
  FaDatabase,
  FaPhone,
  FaRegClock,
  FaRegMessage,
  FaShirt,
  FaUser,
  FaUserDoctor,
  FaUsers,
  FaUsersBetweenLines,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoIosSettings, IoMdMail, IoMdPhotos } from "react-icons/io";
import {
  RiChatFollowUpLine,
  RiCustomerServiceFill,
  RiFileAddLine,
  RiUserHeartLine,
} from "react-icons/ri";
import { CgTranscript } from "react-icons/cg";
import { TbAutomation, TbMessageUser, TbSeo, TbSocial } from "react-icons/tb";
import { SiGitconnected } from "react-icons/si";
import { LuBuilding2, LuMessagesSquare } from "react-icons/lu";
import {
  MdArticle,
  MdBusinessCenter,
  MdDashboardCustomize,
  MdOutlineAttachMoney,
  MdOutlineCampaign,
  MdRecordVoiceOver,
  MdSportsSoccer,
} from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { PiPhonePlusFill } from "react-icons/pi";
import { IoBookmarks, IoLanguage } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";
import { GoLaw } from "react-icons/go";

export const solutionsData = [
  {
    id: "ai-sales-assistant",
    title: "AI Sales Assistant",
    heading: "Turn Conversations into Customers — on Autopilot",
    desc: "Supercharge your outreach with AI voice callers, SMS, cold emails, and WhatsApp campaigns.",
    overviewDesc:
      "Manual prospecting is outdated. Your AI Sales Assistant handles cold outreach and follow-ups — intelligently, consistently, and at scale.",
    coreFeatures: [
      {
        icon: FaPhone,
        title: "Voice Cold Caller (AI makes real-time outbound calls)",
      },
      {
        icon: FaRegMessage,
        title: "SMS Marketing",
      },
      {
        icon: FaUsers,
        title: "Cold DMs - Social Media",
      },
      {
        icon: IoMdMail,
        title: "Cold Email Campaigns",
      },
      {
        icon: FaWhatsapp,
        title: "WhatsApp Messaging",
      },
      {
        icon: FaDatabase,
        title: "Database Reactivation",
      },
      {
        icon: RiChatFollowUpLine,
        title: "Smart Follow-Up Sequences",
      },
      {
        icon: FaShoppingCart,
        title: "Abandoned Cart Retrieval – Call, E-mail, SMS, WhatsApp",
      },
      {
        icon: CgTranscript,
        title: "Meeting Transcripts & Summaries",
      },
      {
        icon: FaUsersBetweenLines,
        title: "Automated Onboarding",
      },
      {
        icon: FaChartLine,
        title: "Increase Conversions Without Increasing Headcount",
      },
      {
        icon: FaRegClock,
        title: "Operates 24/7",
      },
      {
        icon: TbMessageUser,
        title: "Personalized Messaging at Scale",
      },
      {
        icon: SiGitconnected,
        title: "Integrates with your CRM",
      },
      {
        icon: LuMessagesSquare,
        title:
          "Multichannel Outreach (You choose the channels you want to integrate)",
      },
    ],
    whoItsFor: [
      {
        icon: MdOutlineAttachMoney,
        title: "Sales Teams",
      },
      {
        icon: RiFileAddLine,

        title: "Lead Generation Agencies",
      },
      {
        icon: LuBuilding2,

        title: "Real Estate Agents",
      },
      {
        icon: FaUserTie,

        title: "Insurance Brokers",
      },
      {
        icon: FaUserShield,

        title: "Consultants",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "You upload your lead list",
      },
      {
        step: "2",
        title: "We configure messaging per channel",
      },
      {
        step: "3",
        title: "Your AI Assistant starts contacting leads",
      },
      {
        step: "4",
        title: "You get notified of responses & hot leads",
      },
    ],
    button1: "Start Your Sales Automation",
    button2: "Book a Call",
  },
  {
    id: "ai-influencer",
    title: "AI Influencer",
    heading: "Meet Your Brand’s AI Face",
    desc: "Photorealistic AI models that promote your brand, showcase products, and create unlimited content.",
    overviewDesc:
      "No more scheduling photoshoots or hiring influencers. Create a hyper-realistic AI model to represent your brand across platforms.",
    coreFeatures: [
      {
        icon: FaUser,
        title: "Virtual Influencer Model (Customizable Appearance)",
      },
      {
        icon: IoMdPhotos,
        title: "Photos Modelling",
      },
      {
        icon: TfiVideoClapper,
        title: "Reels & Short Videos",
      },
      {
        icon: MdRecordVoiceOver,
        title: "AI Voice for Narration",
      },
      {
        icon: RiUserHeartLine,
        title: "Influencer Social Media",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Save 90% on production costs",
      },
      {
        icon: TbSocial,
        title: "Post consistently across channels",
      },
      {
        icon: MdOutlineCampaign,
        title: "Use one model across all campaigns",
      },
      {
        icon: MdDashboardCustomize,
        title: "Tailor appearance, voice, and tone to your brand",
      },
    ],
    whoItsFor: [
      {
        icon: FaStore,
        title: "E-commerce Brands",
      },
      {
        icon: FaShirt,
        title: "Fashion & Beauty Companies",
      },
      {
        icon: FaUserTie,
        title: "Digital Agencies",
      },
      {
        icon: MdBusinessCenter,
        title: "Businesses that want a Mascot for their Social Media",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Lead List",
      },
      {
        step: "2",
        title: "Configure Messaging",
      },
      {
        step: "3",
        title: "AI Starts Contacting",
      },
      {
        step: "4",
        title: "Get Notified",
      },
    ],
    button1: "Create Your AI Influencer",
    button2: "Get Your Ai",
  },
  {
    id: "ai-marketing-suite",
    title: "AI Marketing Suite",
    heading: "Effortless Content. Explosive Reach.",
    desc: "Automate your content generation and dominate every digital channel with AI-powered marketing tools.",
    overviewDesc:
      "Forget writer’s block and costly creatives. The AI Marketing Suite creates blog posts, ad creatives, social media content, and more — in minutes.",
    coreFeatures: [
      {
        icon: MdArticle,
        title: "SEO Blog/Article Generator",
      },
      {
        icon: FaPhotoVideo,
        title: "Ad Creative Generator (image/video)",
      },
      {
        icon: FaHashtag,
        title: "Instagram/Facebook Caption + Hashtag Generator",
      },
      {
        icon: TfiVideoClapper,
        title: "Reel Generator",
      },
      {
        icon: FaLinkedinIn,
        title: "LinkedIn Post Generator",
      },
      {
        icon: FaChartLine,
        title: "10x content output",
      },
      {
        icon: MdRecordVoiceOver,
        title: "Consistent brand voice",
      },
      {
        icon: TbSeo,
        title: "Fully SEO-optimized",
      },
      {
        icon: MdDashboardCustomize,
        title: "Customizable per audience & platform",
      },
    ],
    whoItsFor: [
      {
        icon: FaUserTie,
        title: "Marketers",
      },
      {
        icon: TbSeo,
        title: "SEO Agencies",
      },
      {
        icon: FaUsers,
        title: "Content Teams",
      },
      {
        icon: MdSportsSoccer,
        title: "Coaches",
      },
      {
        icon: FaHospitalUser,
        title: "Founders",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Enter your product/topic",
      },
      {
        step: "2",
        title: "Select your platform",
      },
      {
        step: "3",
        title: "Get instant content tailored to your brand and audience",
      },
    ],
  },
  {
    id: "ai-clone",
    title: "Your AI Clone",
    heading: "Let People Talk to You — Even When You’re Asleep",
    desc: "Clone your voice, face, and brain to automate consultations, support, and content.",
    overviewDesc:
      "Imagine a digital version of yourself that can speak, advise, sell, and support. From voice calls to video, your AI Clone handles it all.",
    coreFeatures: [
      {
        icon: FaRobot,
        title: "Chatbot trained on your knowledge",
      },
      {
        icon: FaRegClone,
        title: "Video Clone (you speaking a script)",
      },
      {
        icon: FaPhone,
        title: "Voice Clone for phone calls",
      },
      {
        icon: FaUser,
        title: "Personal branding AI",
      },
      {
        icon: FaUsers,
        title:
          "Allow all your students to speak to your knowledge at the same time",
      },
      {
        icon: FaUserTie,
        title: "Preserve your personality and expertise",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Monetize your knowledge 24/7",
      },
    ],
    whoItsFor: [
      {
        icon: MdSportsSoccer,
        title: "Coaches",
      },
      {
        icon: FaUserShield,
        title: "Consultants",
      },
      {
        icon: RiUserHeartLine,
        title: "Influencers",
      },
      {
        icon: FaUserTie,
        title: "CEOs",
      },
      {
        icon: RiCustomerServiceFill,
        title: "Customer Support Professionals",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload training content (Courses, Videos, FAQ)",
      },
      {
        step: "2",
        title: "Record a voice and video sample",
      },
      {
        step: "3",
        title: "We’ll create your AI clone",
      },
    ],
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    heading: "AI That Picks Up Every Call — Instantly",
    desc: "Meet your multilingual voice support agent that works 24/7 without burnout.",
    overviewDesc:
      "No more missed calls or long hold times. Our AI handles inbound support calls, answers questions, and even books appointments.",
    coreFeatures: [
      {
        icon: PiPhonePlusFill,
        title: "Multiple AI Inbound Voice Calls Simultaneously",
      },
      {
        icon: IoLanguage,
        title: "Multilingual Conversations",
      },
      {
        icon: IoBookmarks,
        title: "Real-Time Appointment Booking, Rescheduling & Cancelling",
      },
      {
        icon: FaQuestion,
        title: "FAQ & Knowledge Base Integration",
      },
      {
        icon: FaUser,
        title: "Human Transfer if necessary",
      },
      {
        icon: FaDatabase,
        title: "Collect and Store Customer data in a CRM",
      },
      {
        icon: FaRegClock,
        title: "Serve customers 24/7",
      },
      {
        icon: FaPhone,
        title: "Handle multiple calls at once",
      },
      {
        icon: RiUserHeartLine,
        title: "Improve satisfaction",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Reduce support costs",
      },
    ],
    whoItsFor: [
      {
        icon: FaUserDoctor,
        title: "Healthcare",
      },
      {
        icon: LuBuilding2,
        title: "Real Estate",
      },
      {
        icon: GrCloudSoftware,
        title: "SaaS",
      },
      {
        icon: GoLaw,
        title: "Law Firms",
      },
      {
        icon: FaUserTie,
        title: "SMBs",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Train AI on your FAQs and processes",
      },
      {
        step: "2",
        title: "Connect it to a phone number",
      },
      {
        step: "3",
        title: "Go live in days",
      },
    ],
  },
  {
    id: "ai-business-partner",
    title: "AI Business Partner",
    heading: "Your Own Dedicated AI Ops Team",
    desc: "One flat fee. Unlimited automations. All your AI needs handled for you.",
    overviewDesc:
      "An elite-level service for serious businesses. Get a dedicated AI specialist who automates your operations, trains your team, and maintains everything.",
    coreFeatures: [
      {
        icon: FaRobot,
        title: "Dedicated AI Strategist",
      },
      {
        icon: TbAutomation,
        title: "Unlimited Workflow Automations",
      },
      {
        icon: RiCustomerServiceFill,
        title: "Personalized Support & Documentation",
      },
      {
        icon: FaUsers,
        title: "Custom AI Training for Your Team",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Save thousands on operations",
      },
      {
        icon: BarChart3,
        title: "10x productivity",
      },
      {
        icon: FaTools,
        title: "Stay ahead with cutting-edge tools",
      },
      {
        icon: IoIosSettings,
        title: "Scalable, repeatable systems",
      },
    ],
    whoItsFor: [
      {
        icon: MdOutlineAttachMoney,
        title: "Scaling Businesses",
      },
      {
        icon: FaUserTie,
        title: "Founders who want to automate",
      },
      {
        icon: FaUserShield,
        title: "Agencies",
      },
      {
        icon: LuBuilding2,
        title: "Enterprises needing hands-on AI help",
      },
    ],
    pricing: {
      price: "$5,000/month",
      desc: "3-month minimum commitment",
    },
    howItWorks: [
      {
        step: "1",
        title: "We Understand & Audit Your Business",
      },
      {
        step: "2",
        title: "Create Custom Automation Roadmap",
      },
      {
        step: "3",
        title: "Deliver, Optimize, and Support",
      },
    ],
  },
];
