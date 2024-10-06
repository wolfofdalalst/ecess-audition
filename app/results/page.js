import { FocusCards } from "@/components/ui/focus-cards";

export default function ResultsPage() {
    const cards = [
        {
            title: "Forest Adventure",
            src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Valley of life",
            src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Behta hi jayega",
            src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Camping is for pros",
            src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The road not taken",
            src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The First Rule",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
    ];


    return (
        <div
            className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
            {/* Radial gradient for the container to give a faded look */}
            <div className="text-white max-w-5xl mx-auto p-8 dark">
                <p className="text-3xl font-bold mx-10 mb-4">Results</p>
                <p className="text-md mx-10 mb-6 text-slate-300">
                    Here are the selected inductees for ECESS. We congratulate all the candidates for their outstanding performance and welcome them to the society!
                </p>
                <FocusCards cards={cards} />
            </div>
        </div>
    );
}
