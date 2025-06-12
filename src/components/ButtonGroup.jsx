import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Marcar todo como completo
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Marcar todo como incompleto
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Restablecer a lista predeterminada
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Eliminar todos los elementos
      </Button>
    </section>
  );
}
