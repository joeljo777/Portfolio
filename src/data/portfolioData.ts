import { Project, Achievement, SkillCategory, Education, Experience, Publication } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Joel Jo",
  title: "Embedded Systems & Firmware Engineer",
  tagline: "Bridging low-level hardware constraints with real-time software determinism.",
  summary: "Electronics and Communication Engineering student (CGPA 8.7/10) at REVA University with hands-on experience in real-time firmware, FreeRTOS, hardware interrupts, and low-level communication protocols. Experienced in architecting, validating, and debugging embedded prototypes across STM32 and ESP32 platforms.",
  email: "joelec.07@gmail.com",
  phone: "+91-89512 70055",
  location: "Bengaluru, India",
  github: "https://github.com/joeljo777",
  linkedin: "https://linkedin.com/in/joel-jo",
  resumeDriveUrl: "https://drive.google.com/file/d/1CZ5VM8Qji94ro6wnocFbv6TigazXgVIt/view?usp=sharing",
  currentFocus: "STM32 Firmware, CAN Bus Diagnostics & Safety-Critical RTOS",
  telemetry: {
    coreSpeed: "240 MHz",
    kernel: "FreeRTOS Preemptive",
    busesActive: "UART / SPI / I2C / LoRa",
    status: "SYS_NOMINAL"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "v2v-collision-avoidance",
    slug: "v2v-collision-avoidance",
    title: "LoRa-Based V2V Collision Avoidance System",
    subtitle: "Real-time inter-vehicle telemetry and trajectory proximity warnings",
    category: "Automotive / V2X",
    timeline: "2025 – 2026",
    status: "Hardware Prototype",
    mcu: "ESP32 (Dual-Core Xtensa LX6)",
    hardware: ["ESP32 DevKit", "Semtech SX1278 LoRa Transceiver", "NEO-6M GPS Module", "Piezo Audio / OLED Display"],
    protocols: ["LoRa RF (433/868 MHz)", "UART (NMEA Stream)", "SPI (Transceiver Control)"],
    firmwareStack: ["Embedded C / C++", "FreeRTOS Dual-Core Tasks", "Hardware Interrupts", "NMEA Parser"],
    summary: "Engineered an ESP32-based vehicle-to-vehicle (V2V) safety prototype that exchanges GPS coordinates over LoRa wireless links, continuously calculates inter-vehicle Euclidean distance and bearing, and dispatches multi-stage collision alerts.",
    problemStatement: "In vehicular scenarios where cellular coverage is unavailable or prone to carrier latency, ad-hoc safety warning systems require resilient, low-latency, long-range wireless links operating independently of centralized infrastructure.",
    architectureDetails: [
      "Core 0 Task: Asynchronously reads and decodes 10Hz NMEA sentences from the GPS module via hardware UART buffer.",
      "Core 1 Task: Handles LoRa packet serialization/deserialization via SPI, runs Haversine distance computations, and triggers GPIO alerts under sub-100ms deadlines.",
      "Inter-Core Synchronization: FreeRTOS queues and mutexes prevent GPS telemetry buffer contention.",
      "Packet Collision Avoidance: Implemented pseudo-random transmission jitter to minimize RF packet collisions on the shared LoRa channel."
    ],
    challengesAndSolutions: [
      {
        challenge: "High computing overhead of floating-point trigonometric calculations affecting wireless packet timing.",
        solution: "Decoupled computation to Core 1 and optimized coordinate parsing using fixed-point math approximations for immediate proximity checks."
      },
      {
        challenge: "GPS fix dropouts in dense or shaded testing environments.",
        solution: "Added dead-reckoning extrapolation and stale-telemetry validation flags before issuing trajectory alerts."
      }
    ],
    resultsAndValidation: [
      "Achieved stable inter-vehicle telemetry exchange at line-of-sight distances up to 800+ meters.",
      "Maintained deterministic alert latency under 85ms from packet reception to audio-visual alarm trigger.",
      "Direct research foundation for co-authored IEEE CONIT 2026 conference paper."
    ],
    githubUrl: "https://github.com/joeljo777",
    featured: true
  },
  {
    id: "airbag-management-system",
    slug: "airbag-management-system",
    title: "Safety-Critical Airbag Management System",
    subtitle: "Deterministic crash event detection with interrupt-priority management",
    category: "Real-Time / Safety-Critical",
    timeline: "2025",
    status: "Validated System",
    mcu: "STM32 / ESP32 Target",
    hardware: ["Target MCU", "High-G Accelerometer Simulator", "Hardware EXTI Trigger Circuitry", "Diagnostic Logging Output"],
    protocols: ["SPI", "I2C", "UART (Telemetry)"],
    firmwareStack: ["Embedded C", "FreeRTOS Preemptive Kernel", "EXTI Interrupt Handlers", "IPC Event Groups"],
    summary: "Architected a FreeRTOS-based airbag deployment controller prototype evaluating deterministic response times, interrupt priority preemption, and inter-process communication under simulated high-g collision conditions.",
    problemStatement: "Automotive passive restraint controllers require deterministic sub-millisecond event detection and fail-safe deployment logic without risking false deployments or scheduler deadlock.",
    architectureDetails: [
      "Impact ISR: High-priority External Interrupt (EXTI) captures impact threshold violations with zero task-scheduling delay.",
      "FreeRTOS Preemptive Task Architecture: Critical deployment task sits at maximum priority, woken instantly via direct-to-task notifications from the ISR.",
      "State-Machine Integrity: Dual-stage validation requires consecutive confirmation frames before asserting actuator deployment lines.",
      "Fault-Tolerance: Watchdog timer (IWDG) and system-health heartbeat task monitor kernel liveness."
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing scheduler starvation of diagnostic logging tasks while guaranteeing microsecond-level deployment readiness.",
        solution: "Used FreeRTOS task notifications instead of heavy queues for the critical path and deferred all telemetry logging to idle/low-priority tasks."
      },
      {
        challenge: "Spurious sensor noise triggering false-positive impact alerts.",
        solution: "Implemented an integrated moving-window threshold algorithm in the ISR pre-validation stage."
      }
    ],
    resultsAndValidation: [
      "Validated deterministic trigger-to-actuation latency under 2.4 milliseconds across stress-testing runs.",
      "Zero priority inversions or task deadlocks observed during continuous 48-hour hardware-in-the-loop stress testing."
    ],
    githubUrl: "https://github.com/joeljo777",
    featured: true
  },
  {
    id: "asthma-guard",
    slug: "asthma-guard",
    title: "Asthma Guard – Wearable Respiratory Monitor",
    subtitle: "Real-time biosignal acquisition and abnormal-breathing anomaly detection",
    category: "Biomedical / Wearable",
    timeline: "2025 – 2026",
    status: "National Podium",
    mcu: "Wearable Low-Power MCU",
    hardware: ["Wearable MCU Target", "Acoustic Respiratory Microphone", "MAX30102 SpO2 / Heart-Rate Sensor", "Respiratory Flow Strain Sensor", "BLE Radio"],
    protocols: ["I2C", "SPI", "BLE / UART"],
    firmwareStack: ["Embedded C", "Digital Signal Filtering", "Threshold Anomaly Detector", "Low-Power Duty Cycling"],
    summary: "Engineered a wearable biomedical prototype integrating continuous respiratory-rate, blood-oxygen (SpO2), and acoustic wheeze sensing to detect early-onset asthma attacks and abnormal breathing patterns.",
    problemStatement: "Pediatric and chronic respiratory patients often experience nocturnal asthma attacks without immediate warning, requiring non-invasive, continuous, wearable monitoring capable of real-time acoustic signal discrimination.",
    architectureDetails: [
      "Signal Pipeline: Acoustic sensor captures tracheal breath sounds; low-power ADC samples at 8kHz with DMA transfer to prevent CPU blocking.",
      "Firmware Digital Filtering: Implemented bandpass filtering (100Hz–1500Hz) to isolate wheeze and stridor frequencies while attenuating cardiac and ambient acoustic noise.",
      "Continuous SpO2 Tracking: I2C driver for optical photoplethysmography (PPG) with automatic ambient light cancellation.",
      "Alert Logic: Tri-sensor correlation (Acoustic + SpO2 + Respiratory Rate) prevents false alarms from coughing or physical movement."
    ],
    challengesAndSolutions: [
      {
        challenge: "Severe acoustic motion artifacts caused by clothing friction and bodily movement.",
        solution: "Combined dynamic thresholding with baseline subtraction and cross-verified with SpO2 trend data before flagging an attack."
      }
    ],
    resultsAndValidation: [
      "Awarded 1st Runner-Up at CMTI Design and Innovation Clinic 2026 among national engineering teams.",
      "Successfully recognized abnormal breathing acoustics with high confidence in bench validation trials."
    ],
    githubUrl: "https://github.com/joeljo777",
    featured: true
  },
  {
    id: "parkinsons-monitoring-system",
    slug: "parkinsons-monitoring-system",
    title: "Parkinson’s Disease Patient Monitoring System",
    subtitle: "Dual-sensor tremor classification and voluntary motion suppression",
    category: "Biomedical / Wearable",
    timeline: "2024 – 2025",
    status: "National Podium",
    mcu: "Low-Power ARM Cortex-M / ESP32 Target",
    hardware: ["Surface EMG (sEMG) Electrodes", "MPU6050 6-Axis IMU", "Active Filter Analog Front-End", "Microcontroller Target"],
    protocols: ["I2C", "ADC / Analog Interfacing", "UART"],
    firmwareStack: ["Embedded C", "FIR Digital Filtering", "FFT Feature Extraction", "Real-Time Tremor Classifier"],
    summary: "Developed an intelligent wearable system capturing resting muscle tremors and postural kinematic data via sEMG and 6-axis IMU, applying digital filtering to suppress voluntary motion artifacts for symptom quantification.",
    problemStatement: "Accurate assessment of Parkinson's tremor progression is traditionally limited to periodic clinical visits. Continuous quantification requires distinguishing involuntary 4–7 Hz Parkinsonian tremors from everyday intentional movements.",
    architectureDetails: [
      "Analog Front-End: Integrated differential amplification and 50Hz notch filtering for raw sEMG signals.",
      "Sensor Fusion: Combines accelerometer/gyroscope kinematic angular velocity with muscle activation potentials.",
      "Real-Time Classification: Firmware isolates characteristic 4–7 Hz tremor frequency bands using frequency-domain windowing.",
      "Telemetry Export: Packages symptom duration and intensity metrics for clinical trend evaluation."
    ],
    challengesAndSolutions: [
      {
        challenge: "Separating voluntary muscular contractions (e.g. reaching, typing) from pathological involuntary tremors.",
        solution: "Devised a dual-threshold algorithm that correlates high-frequency sEMG bursts with IMU rotational acceleration signatures."
      }
    ],
    resultsAndValidation: [
      "Secured 1st Prize Winner in Hardware - Healthcare Technology at the IEEE ANVESHAN 24-Hour State-Level Hackathon (₹15,000 cash prize).",
      "Demonstrated accurate tremor detection with minimal false triggers during active user mobility."
    ],
    githubUrl: "https://github.com/joeljo777",
    featured: true
  },
  {
    id: "square-wave-inverter",
    slug: "square-wave-inverter",
    title: "Square Wave Inverter Using MOSFET",
    subtitle: "Discrete power electronics DC–AC conversion and switching analysis",
    category: "Power Electronics",
    timeline: "2024",
    status: "Simulation Validated",
    mcu: "Discrete Gate Driver Circuitry",
    hardware: ["N-Channel Power MOSFETs", "Pulse Generator", "Step-Up Transformer", "LC Output Filter"],
    protocols: ["PWM Switching Signals"],
    firmwareStack: ["TINA-TI Circuit Simulation", "Waveform Transient Analysis"],
    summary: "Engineered and simulated a MOSFET-based DC–AC push-pull inverter circuit, validating switching dynamics, total harmonic distortion (THD), and voltage regulation across varying resistive and inductive loads.",
    problemStatement: "Designing efficient DC-to-AC conversion circuits requires balancing switching speed, gate-source capacitance charging losses, and dead-time management to prevent shoot-through currents.",
    architectureDetails: [
      "H-Bridge Topology: Utilized discrete power MOSFETs with optimized gate resistor damping.",
      "Dead-Time Injection: Modeled non-overlapping complementary gate drive signals to prevent shoot-through faults.",
      "Waveform Characterization: Evaluated transient response under sudden load step changes in TINA-TI."
    ],
    challengesAndSolutions: [
      {
        challenge: "Inductive ringing and high-voltage spikes during MOSFET turn-off transitions.",
        solution: "Calculated and integrated RC snubber networks across drain-source terminals to suppress voltage transients."
      }
    ],
    resultsAndValidation: [
      "Validated 50Hz stable AC output waveform with minimal distortion under rated load conditions in TINA-TI simulation."
    ],
    githubUrl: "https://github.com/joeljo777",
    featured: false
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "electroxcape-ruas",
    title: "1st Prize — ElectroXcape (Pravrutti 2.0)",
    event: "Pravrutti 2.0 // National Technical Fest",
    date: "16th October, 2026",
    organizer: "Ramaiah University of Applied Sciences (RUAS)",
    prize: "1st Place Winner • Cash Prize ₹7,000",
    team: "Team AstroDevs",
    description: "Competed in high-intensity technical rounds testing complex circuit analysis, fault diagnosis, system reconfiguration, and practical electronics troubleshooting under rigorous time constraints.",
    image: "/images/achievments/ElectroXcape.JPG",
    thumbnail: "/images/achievments/thumbs/ElectroXcape_thumb.webp",
    aspectRatio: "16/10",
    tags: ["Circuit Analysis", "Fault Diagnosis", "Troubleshooting", "Hardware"]
  },
  {
    id: "anveshan-state-hackathon",
    title: "1st Prize Winner — IEEE ANVESHAN State-Level Hackathon",
    event: "ANVESHAN: 24-Hour Multi-Domain Hackathon",
    date: "2024 – 2025",
    organizer: "IEEE Bangalore Section (SAC) & Acharya Institutes",
    prize: "1st Place Winner (Hardware - Healthcare) • Cash Prize ₹15,000",
    team: "Parkinson's Monitoring Team",
    description: "Built and demonstrated a functional wearable prototype for Parkinson’s disease patient monitoring using sEMG and 6-axis IMU with real-time digital filtering during a continuous 24-hour sprint.",
    image: "/images/achievments/Anveshan_IEEE.png",
    thumbnail: "/images/achievments/thumbs/Anveshan_IEEE_thumb.webp",
    aspectRatio: "16/12",
    tags: ["State Hackathon", "IEEE Bangalore", "Biomedical Hardware", "sEMG"]
  },
  {
    id: "cmti-asthma-guard",
    title: "1st Runner-Up — CMTI Design & Innovation Clinic 2026",
    event: "National Design & Innovation Clinic 2026",
    date: "April 2026",
    organizer: "Central Manufacturing Technology Institute (CMTI) & Ministry of Heavy Industries",
    prize: "1st Runner-Up • National Podium",
    team: "Asthma Guard Team",
    description: "Presented the Asthma Guard wearable respiratory monitoring device to an expert national evaluation committee comprising industry leaders, scientists, and officials from the Ministry of Heavy Industries.",
    image: "/images/achievments/CMTI.jpeg",
    thumbnail: "/images/achievments/thumbs/CMTI_thumb.webp",
    aspectRatio: "16/9",
    tags: ["National Innovation", "CMTI", "Wearable Device", "Biomedical"]
  },
  {
    id: "ieee-technical-quiz",
    title: "1st Place — Technical Quiz Competition",
    event: "Annual Technical Quiz (ECE)",
    date: "17th December, 2024",
    organizer: "School of ECE, REVA University in association with IEEE AP-S & IEEE SPS",
    prize: "1st Place Winner • Certificate of Appreciation & IEEE Kit",
    team: "Joel Jo & Team",
    description: "Secured first position across multi-stage technical quiz rounds covering microprocessors, digital signal processing, electromagnetic theory, and analog circuit design.",
    image: "/images/achievments/QUIZ.jpg",
    thumbnail: "/images/achievments/thumbs/QUIZ_thumb.webp",
    aspectRatio: "16/12",
    tags: ["IEEE AP-S", "IEEE SPS", "Electronics Quiz", "REVA University"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    skills: [
      { name: "C", level: "Proficient", note: "Core systems language" },
      { name: "Embedded C", level: "Proficient", note: "Bare-metal & register-level" },
      { name: "Python", level: "Proficient", note: "Scripting, test automation & data" },
      { name: "C++", level: "Familiar", note: "Object-oriented embedded" },
      { name: "Data Structures", level: "Exploring", note: "Algorithms & buffers" }
    ]
  },
  {
    title: "Microcontrollers & Hardware",
    iconName: "Cpu",
    skills: [
      { name: "STM32 (ARM Cortex-M)", level: "Proficient", note: "STM32F4 / HAL / LL" },
      { name: "ESP32 (Xtensa)", level: "Proficient", note: "Dual-core, FreeRTOS, WiFi/BLE" },
      { name: "STM32CubeIDE", level: "Proficient", note: "Clock tree, pinout, debugger" },
      { name: "Hardware Interrupts (EXTI)", level: "Proficient", note: "Priority grouping & ISRs" },
      { name: "Arduino / RP Pico", level: "Familiar", note: "Rapid prototyping" }
    ]
  },
  {
    title: "Real-Time Operating Systems",
    iconName: "Clock",
    skills: [
      { name: "FreeRTOS", level: "Proficient", note: "Preemptive multitasking" },
      { name: "Inter-Process Communication", level: "Proficient", note: "Queues, semaphores, event groups" },
      { name: "Real-Time Scheduling", level: "Proficient", note: "Priority preemption & deadlines" },
      { name: "QNX RTOS Concepts", level: "Exploring", note: "Microkernel & safety-critical" }
    ]
  },
  {
    title: "Protocols & Interfacing",
    iconName: "Network",
    skills: [
      { name: "UART / USART", level: "Proficient", note: "DMA, circular buffers" },
      { name: "SPI", level: "Proficient", note: "High-speed sensor / radio bus" },
      { name: "I2C", level: "Proficient", note: "Sensor addressing & clock stretching" },
      { name: "LoRa RF", level: "Proficient", note: "Packet telemetry & long-range" },
      { name: "CAN Bus Concepts", level: "Exploring", note: "Automotive arbitration & frames" },
      { name: "GPS Interfacing", level: "Familiar", note: "NMEA stream parsing" }
    ]
  },
  {
    title: "Tools, Simulation & Testing",
    iconName: "Wrench",
    skills: [
      { name: "Firmware Debugging", level: "Proficient", note: "GDB, ST-LINK, logic analyzer" },
      { name: "Hardware Validation", level: "Proficient", note: "Oscilloscope, stress testing" },
      { name: "Git / GitHub", level: "Proficient", note: "Version control" },
      { name: "MATLAB & Simulink", level: "Familiar", note: "Control & signal modeling" },
      { name: "TINA-TI / KiCad", level: "Familiar", note: "Circuit simulation & PCB design" },
      { name: "LabVIEW", level: "Exploring", note: "Virtual instrumentation" }
    ]
  }
];

export const EDUCATION_DATA: Education = {
  degree: "Bachelor of Technology (B.Tech) — Electronics & Communication Engineering",
  institution: "REVA University",
  location: "Bengaluru, India",
  timeline: "2023 – 2027",
  expectedGraduation: "Expected 2027",
  cgpa: "8.7 / 10",
  coursework: [
    "Embedded Systems & Microcontrollers",
    "Real-Time Operating Systems",
    "Control Systems Engineering",
    "Digital Signal Processing",
    "Power Electronics & Drives",
    "VLSI & Digital Circuit Design"
  ]
};

export const LEADERSHIP_DATA: Experience = {
  role: "Vice President — SCOPE Club",
  organization: "School of ECE, REVA University",
  timeline: "2024 – Present",
  location: "Bengaluru, India",
  highlights: [
    "Spearheaded hands-on technical workshops on embedded systems, microcontroller interfacing, PCB design, and hardware prototyping.",
    "Contributed directly to a 30%+ increase in active technical club membership through project-oriented hardware sessions.",
    "Mentored 20+ junior engineering students in microcontroller programming, sensor integration, and debugging for state hackathons and technical project exhibitions."
  ]
};

export const PUBLICATION_DATA: Publication = {
  title: "Smart Traffic Management Using V2X Communication: Technologies, AI Applications, Security, and Future Directions",
  conference: "Proceedings of the 2026 4th International Conference on Intelligent Technologies (CONIT)",
  year: 2026,
  authors: ["Md. Tauseef", "Darshan T K", "Joel Jo", "Imdad Aqueel", "Manmohan Kumar"],
  publisher: "IEEE",
  abstract: "Investigates vehicle-to-everything (V2X) communication architectures for intelligent urban traffic coordination, analyzing wireless protocol latency constraints, real-time edge processing, AI-driven congestion mitigation, and cybersecurity countermeasures for connected automotive fleets."
};
