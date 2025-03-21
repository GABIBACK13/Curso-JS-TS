export default class Toggle {
  constructor() {}

  listner(element: HTMLDivElement): void {
    element.addEventListener("click", (e) => {
      const el = e.target as HTMLButtonElement;
      const box = document.body.querySelector(".box") as HTMLDivElement;

      el.classList.toggle("isActive");
      box.classList.toggle("active");
    });
  }

  init(): void {
    const divBtn = document.querySelector(".toggle-btn") as HTMLDivElement;
    if (!divBtn) return;
    this.listner(divBtn);
  }
}
