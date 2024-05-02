import TaskItem from "@/components/dashboard/TaskItem"
import PlusIcon from "@/assets/svg/plus.svg"

export default function HabbitList(props) {
    return (
        <section className="flex flex-row gap-10">
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Good Habbits</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {props.data.habbitData?.map((e, i) => {
                    if (e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Bad Habbits</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {props.data.habbitData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Todos</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {props.data.todoData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"todo"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
        </section>
    )
}