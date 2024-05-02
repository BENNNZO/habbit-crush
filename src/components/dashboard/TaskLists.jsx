import TaskItem from "@/components/dashboard/TaskItem"
import PlusIcon from "@/assets/svg/plus.svg"

export default function TaskLists(props) {
    let titles = [
        {
            title: "Good Habbits",
            type: "habbit"
        },
        {
            title: "Good Habbits",
            type: "habbit"
        },
        {
            title: "Good Habbits",
            type: "habbit"
        }
    ]

    function title(title) { 
        return (
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">{title}</h2>
                <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setModalState(true)}>
                    <img src={PlusIcon.src} alt="" />
                </button>
            </div>
        )
    }

    // there has to be a better way of compressing this i just can be bothered right now
    return (
        <section className="flex flex-row gap-10">
            <div className="flex flex-col gap-2 w-64">
                {title("Good Habbits")}
                {props.data.habbitData?.map((e, i) => {
                    if (e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                {title("Bad Habbits")}
                {props.data.habbitData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                {title("Todo List")}
                {props.data.todoData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"todo"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
        </section>
    )
}