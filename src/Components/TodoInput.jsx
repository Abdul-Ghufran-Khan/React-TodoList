function Todoinput({value, onChange, onClick}) {
    return (
        <div className="flex text-lg text-center gap-5 items-center">
            <input 
            placeholder="Enter todo" 
            className="border w-72 px-4 rounded-md py-3 bg-slate-100 outline-none"
            value={value}
            type="text"
            onChange={onChange}
            />
            <button 
            className="px-6 py-3 text-gray-50 bg-slate-800 rounded-md"
            onClick={onClick}
            disabled={!value}
            style={{opacity: !value ? 0.5 : 1}}
            >Add</button>
        </div>
    );
}

export default Todoinput