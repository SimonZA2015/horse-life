let store = {
    update: () => {},

    dispatch(action) {

    },

    observer(subscriber) {
        //base can update info on display
        this.update = subscriber;
        this.update();
    }
};

export default store;