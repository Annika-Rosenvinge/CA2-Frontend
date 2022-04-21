const Logout = ({onClick}) => {
    return(
        <div className="border-0">
            <button className="logout" onClick={onClick}>
                Log out
            </button>
        </div>
    );
};

export default Logout;