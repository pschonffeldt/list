import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Button>Mark all as complete</Button>
      <Button>Mark all as incomplete</Button>
      <Button>Reset to initials</Button>
      <Button>Reset all items</Button>
    </section>
  );
}
