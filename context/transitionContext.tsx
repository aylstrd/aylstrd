import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import {
    useState,
    createContext,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useRef,
    RefObject,
} from 'react';

// Mendaftarkan plugin GSAP hanya jika berjalan di lingkungan browser
if (typeof window !== 'undefined') {
    gsap.registerPlugin(CustomEase);
}

// Mendefinisikan tipe untuk TransitionContext
interface TransitionContextType {
    timeline: gsap.core.Timeline | null; // GSAP timeline
    setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>>; // Setter untuk timeline
    resetTimeline: () => void; // Fungsi untuk reset timeline
    primaryEase: gsap.Ease | null; // GSAP easing function
    footerRef: RefObject<HTMLDivElement>; // Referensi untuk elemen footer
}

// Context dengan nilai default
const TransitionContext = createContext<TransitionContextType>({
    timeline: null,
    setTimeline: () => {},
    resetTimeline: () => {},
    primaryEase: null,
    footerRef: { current: null },
});

// Provider untuk TransitionContext
export function TransitionContextProvider({ children }: { children: ReactNode }) {
    // Fungsi yang dipanggil saat transisi dimulai
    const setTransition = () => {
        document.documentElement.classList.add('is-transitioning');
    };

    // State untuk timeline GSAP
    const [timeline, setTimeline] = useState(
        gsap.timeline({ onStart: setTransition, paused: true })
    );

    // Custom easing function menggunakan GSAP
    const primaryEase =
        typeof window !== 'undefined'
            ? CustomEase.create('primaryEase', 'M0,0 C0.62,0.05 0.01,0.99 1,1')
            : null;

    // Referensi untuk elemen footer
    const footerRef = useRef<HTMLDivElement | null>(null);

    // Fungsi untuk mereset timeline
    const resetTimeline = () => {
        if (timeline) {
            timeline.pause().clear();
        }
    };

    // Nilai context yang akan diteruskan
    const contextValue: TransitionContextType = {
        timeline,
        setTimeline,
        resetTimeline,
        primaryEase,
        footerRef,
    };

    return (
        <TransitionContext.Provider value={contextValue}>
            {children}
        </TransitionContext.Provider>
    );
}

// Custom hook untuk menggunakan TransitionContext
export default function useTransitionContext(): TransitionContextType {
    return useContext(TransitionContext);
}
