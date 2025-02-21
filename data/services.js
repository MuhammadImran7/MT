// data/services.js
// const images for the frontend service
const frontendBg = "/images/frontendbgimg.webp";
const frontendLaptop = "/images/FrontendImages/code.webp";
const frontendVuelogo = "/images/FrontendImages/vuelogo.webp";
const frontendReact = "/images/FrontendImages/reactnativelogo.webp";
const frontendAngular = "/images/FrontendImages/Angular-img.webp";
const frontendWordpress = "/images/FrontendImages/wordpress-150x36-1.webp";
const frontendTailwind = "/images/FrontendImages/tailwind.webp";
const frontendBootstrap = "/images/FrontendImages/bootstrap.webp";

// const images for the backend service
const backendBg = "/images/frontendbgimg.webp";
const backendLaptop = "/images/backendImages/backendlaptop.webp";
const backendVuelogo = "/images/backendImages/vstuuio.webp";
const backendReact = "/images/backendImages/phpstorm.webp";
const backendAngular = "/images/backendImages/laravel.webp";
const backendWordpress = "/images/backendImages/node.webp";
const backendTailwind = "/images/backendImages/magento.webp";
const backendBootstrap = "/images/backendImages/php.webp";
// const images for the design service
const designBg = "/images/frontendbgimg.webp";
const designLaptop = "/images/designImages/laptop.webp"; 
const designVuelogo = "/images/designImages/adobe.webp";
const designReact = "/images/designImages/cc.webp";
const designAngular = "/images/designImages/figma.webp";
const designWordpress = "/images/designImages/adobeprem.webp";
const designTailwind = "/images/designImages/xd.webp";
const designBootstrap = "/images/designImages/ps.webp";
// const images for the Quality Assurance service
const qaBg = "/images/frontendbgimg.webp";
const qaLaptop = "/images/qaImages/qalaptop.webp"; 
const qaVuelogo = "/images/qaImages/soap (1).webp";
const qaReact = "/images/qaImages/postman.webp";
const qaAngular = "/images/qaImages/sele.webp";
const qaWordpress = "/images/qaImages/browser.webp";
const qaTailwind = "/images/qaImages/jm.webp";
const qaBootstrap = "/images/qaImages/owsap.webp";

// const images for the network solutions service
const networkBg = "/images/frontendbgimg.webp";
const networkLaptop = "/images/networkImages/networklaptop.webp"; 
const networkVuelogo = "/images/networkImages/aws.webp";
const networkReact = "/images/networkImages/AZURE.webp";
const networkAngular = "/images/networkImages/sona.webp";
const networkWordpress = "/images/networkImages/gittttt.webp";
const networkTailwind = "/images/networkImages/google.webp";
const networkBootstrap = "/images/networkImages/ma.webp";
const networkdo = "/images/networkImages/do.webp";

// const images for the microsoft dynamics service
const dynamicsBg = "/images/frontendbgimg.webp";
const dynamicsLaptop = "/images/dynamicsImages/laptopdynamics.webp"; 
const dynamicsVuelogo = "/images/dynamicsImages/businesscentral.webp";
const dynamicsReact = "/images/dynamicsImages/ms.webp";
const dynamicsAngular = "/images/dynamicsImages/ms1.webp";
const dynamicsWordpress = "/images/dynamicsImages/ms2.webp";
const dynamicsTailwind = "/images/dynamicsImages/ms3.webp";
const dynamicsBootstrap = "/images/dynamicsImages/ms4.webp";



export const services = {
    frontend: {
      title: 'Frontend Development',
      description: 'Transform ideas into seamless web experiences',
      items: [
        'HTML & CSS Responsive Web Design',
        'Javascript Development',
        'Vue JS Development',
        'React JS Development',
        'Angular JS Development',
        'CMS Theming Services',
        'PSD to Bootstrap Services',
      ],
      lastheading: 'Elevate your business with our transformative frontend services!'
      ,
      images: {
        bg: frontendBg,
      laptop: frontendLaptop,
      Vuelogo: frontendVuelogo,
      react: frontendReact,
      angular: frontendAngular,
      wordpress: frontendWordpress,
      tailwind: frontendTailwind,
      bootstrap: frontendBootstrap,
      }
    },
    backend: {
      title: 'Backend Solutions',
      description: 'Seamless operations start with strategic backend development',
      items: [
        'Server-Side Scripting',
        'Database Design and Management',
        'API Development',
        'Backend Framework Development',
        'Server Configuration and Management',
        'Caching and Performance Optimization',
        'Integration with Third-Party Services'
        // Add other items here
      ],
      lastheading: 'Empower your business with our transformative backend solutions!',
      images: {
        bg: backendBg,
        laptop: backendLaptop,
        Vuelogo: backendVuelogo,
        react: backendReact,
        angular: backendAngular,
        wordpress: backendWordpress,
        tailwind: backendTailwind,
        bootstrap: backendBootstrap,
      }
    },
    design: {
        title: 'Design Services',
        description: 'Designing Ideas into Seamless Visual Experiences',
        items: [
          'Video Editing',
          'UI Design',
          'Prototyping',
          'Graphics',
          'Wireframes',
          'Component based designs',
          'Motion Graphic',
          'Social Media Branding',
          'CGI Photography'
          // Add other items here
        ],
        lastheading: 'Enhance your brand with our revolutionary design services!',
        images: {
          bg: designBg,
          laptop: designLaptop,
          Vuelogo: designVuelogo,
          react: designReact,
          angular: designAngular,
          wordpress: designWordpress,
          tailwind: designTailwind,
          bootstrap: designBootstrap,
        }
      },
      
    
    qualityassurance  : {
        title: 'Quality Assurance',
        description: 'Strategizing Flawless Quality Assurance Mastery',
        items: [
          'Manual Testing',
          'Regression Testing',
          'User Acceptance Testing (UAT)',
          'Performance Testing',
          'Usability Testing',
          'Component based designs',
          'Code Reviews',
          // Add other items here
        ],
        lastheading: 'Uplift your excellence with distinctive quality assurance prowess!',
        images: {
          bg: qaBg,
          laptop: qaLaptop,
          Vuelogo: qaVuelogo,
          react: qaReact,
          angular: qaAngular,
          wordpress: qaWordpress,
          tailwind: qaTailwind,
          bootstrap: qaBootstrap,
        }
      },
      cloudservices  : {
        title: 'Network Solutions',
        description: 'Cloud Solutions for Today Digital Era',
        items: [
          'AWS Services',
          'Microsoft Azure Services',
          'SAAS Services',
          'PAAS Services',
          'IAAS Services',
          'Load Balancing',
          'Proxy Servers',
          'SSL/TLS Encryption',
          'IPv4 and IPv6 Addressing',
          'Routing and Switching',
          'Subnetting'
          // Add other items here
        ],
        lastheading: 'Revitalize your business with cutting-edge networking strategies!',
        images: {
          bg: networkBg,
          laptop: networkLaptop,
          Vuelogo: networkVuelogo,
          react: networkReact,
          angular: networkAngular,
          wordpress: networkWordpress,
          tailwind: networkTailwind,
          bootstrap: networkBootstrap,
          ma: networkdo,
        }
      },
      microdynamics  : {
        title: 'Microsoft Dynamics',
        description: 'Integrated dynamic solution with comprehensive services.',
        items: [
          'Data Migration',
          'Project Management',
          'Application Integration',
          'Customization and Development',
          'Reporting and Analytics',
          'Performance Optimization',
          'Support',
          'General Ledger Management',
          'Account Receivable Management',
          'Financial Reporting',
          'Bank Reconciliation'
          // Add other items here
        ],
        lastheading: 'Boost your business with our progressive services!',
        images: {
          bg: dynamicsBg,
          laptop: dynamicsLaptop,
          Vuelogo: dynamicsVuelogo,
          react: dynamicsReact,
          angular: dynamicsAngular,
          wordpress: dynamicsWordpress,
          tailwind: dynamicsTailwind,
          bootstrap: dynamicsBootstrap,
        }
      },
      
    // Add more services as needed
  };
//   let Vuelogo = '';
// try {
//   Vuelogo = require('/images/backendImages/vstuuio.webp');
// } catch (e) {
//   console.error('Image not found:', e);
//   Vuelogo = '/images/backendImages/phpstorm.webp'; // Set a default image here
// }

  