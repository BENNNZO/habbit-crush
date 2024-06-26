import TaskListsSkeleton from "./TaskListsSkeleton"

import TaskItem from "@/components/dashboard/Tasks/TaskItem"
import PlusIcon from "@/assets/svg/plus.svg"

export default function TaskLists(props) {
    function title(title) { 
        return (
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">{title}</h2>
                <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setModalNewState(true)}>
                    <img src={PlusIcon.src} alt="" />
                </button>
            </div>
        )
    }

    // there has to be a better way of compressing this i just can be bothered right now
    return (
        <section className="flex flex-row gap-10 relative">
            {props.data.habbitData === null  || props.data.todoData === null ? (
                <TaskListsSkeleton />
            ) : (
                <>
                    <div className="flex flex-col gap-2 w-64">
                        {title("Good Habbits")}
                        <div className="flex flex-col gap-2 h-[30rem] overflow-y-scroll rounded-md">
                            {props.data.habbitData?.map((e, i) => {
                                if (e.type) {
                                    return <TaskItem reload={() => props.reload()} data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} setModalEditState={(e) => props.setModalEditState(e)} />
                                }
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-64">
                        {title("Bad Habbits")}
                        <div className="flex flex-col gap-2 h-[30rem] overflow-y-scroll">
                            {props.data.habbitData?.map((e, i) => {
                                if (!e.type) {
                                    return <TaskItem reload={() => props.reload()} data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} setModalEditState={(e) => props.setModalEditState(e)} />
                                }
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-64">
                        {title("Todo List")}
                        <div className="flex flex-col gap-2 h-[30rem] overflow-y-scroll relative">
                            {props.data.todoData?.map((e, i) => {
                                if (!e.type) {
                                    return <TaskItem reload={() => props.reload()} data={e} type={"todo"} index={i} key={i} setData={(e) => setHabbitData(e)} setModalEditState={(e) => props.setModalEditState(e)} />
                                }
                            })}
                        </div>
                    </div>
                </>
            )}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-background h-4"></div>
        </section>
    )
}