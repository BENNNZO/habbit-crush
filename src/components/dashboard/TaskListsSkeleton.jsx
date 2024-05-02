import TaskItem from "@/components/dashboard/TaskItem"
import PlusIcon from "@/assets/svg/plus.svg"

export default function TaskListsSkeleton() {
    function title(title) {
        return (
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h2 className="font-bold bg-white/5 h-8 py-1 px-2 rounded-md w-full text-white/20">{title}</h2>
                <button className="h-8 aspect-square bg-white/5 rounded-md p-2 hover:bg-primary duration-100">
                    <img src={PlusIcon.src} alt="" className="opacity-20" />
                </button>
            </div>
        )
    }


    return (
        <section className="flex flex-row gap-10 animate-pulse">
            <div className="flex flex-col gap-2 w-64">
                {title("Good Habbits")}
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
            </div>
            <div className="flex flex-col gap-2 w-64">
                {title("Bad Habbits")}
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
            </div>
            <div className="flex flex-col gap-2 w-64">
                {title("Todo List")}
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
                <div className="bg-white/5 h-24 rounded-md"></div>
            </div>
        </section>
    )
}