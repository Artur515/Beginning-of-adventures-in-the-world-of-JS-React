const debounce = ((timer = null) => (cb, delay = 1500) => {
    return (...arg) => {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(cb, delay, ...arg);
    };
})();

///Пример
const handleSearch = debounce(async (e) => {
    const { value } = e.target;
    const { data: users } = await api.getUsers(value);
    setUsers(users);
}, 500);

//Пример
const handleOnSearch = ((timer == null) => async (e) => 
    if (timer != null) {
        clearTimeout(timer);
    }
    timer = setTimeout(async () => {
        const { value } = e.target;
        const { data: users } = await api.getUsers(value);
        setUsers(users);
        timer = null;
    }, 1500);
})();
