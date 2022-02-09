type TItemStatus = "new" | "processing" | "done" | "error";

interface IItem {
    id: number;
    name: string;
    date: Date;
    status: TItemStatus;
    image: string | null;
}
