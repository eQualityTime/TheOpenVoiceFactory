package mobile.theopenvoicefactory.org.theopenvoicefactory.events;

import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Grid;

public class MyEvents {

    public static class ItemClicked {

        public Grid grid;

        public Grid getGrid() {
            return grid;
        }

        public ItemClicked(Grid grid) {
            this.grid = grid;
        }
    }
}
