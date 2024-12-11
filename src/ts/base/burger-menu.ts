import { getElement, ReturningTypeDom } from "./get-element.ts";

export function burgerMenu() {
    const button: ReturningTypeDom = getElement(".burger__icon");
    const background: ReturningTypeDom = getElement(".burger__background");
    let clickBurgerIconStatus: boolean = false;

    if (button instanceof HTMLElement && background instanceof HTMLElement) {
        button.addEventListener("click", (): void => {
            clickBurgerIconStatus = !clickBurgerIconStatus;
            button.classList.toggle("burger__icon_active", clickBurgerIconStatus);
            background.classList.toggle("burger__background_active", clickBurgerIconStatus);
        });
    }
}

export function burgerSubMenu() {
    const buttonsOpen: ReturningTypeDom = getElement(".burger__button", "all");
    const subMenu: ReturningTypeDom = getElement(".burger-sub__header-button", "all");

    activeSubBurgerMenu(buttonsOpen, true);
    activeSubBurgerMenu(subMenu, false);
}

function activeSubBurgerMenu(elements: ReturningTypeDom, activeStatus: boolean): void {
    if (elements instanceof NodeList) {
        const arrButton: HTMLElement[] = Array.from(elements) as HTMLElement[];
        arrButton.forEach((button: HTMLElement): void => {
            button.addEventListener("click", (): void => {
                const getId: string | null = button.getAttribute("data-header-sub-menu");
                if (getId) {
                    const menu: ReturningTypeDom = getElement(`${getId}`, "id");
                    if (menu instanceof HTMLElement) {
                        menu.classList.toggle("burger-sub__menu_active", activeStatus);
                    }
                }
            });
        });
    }
}
