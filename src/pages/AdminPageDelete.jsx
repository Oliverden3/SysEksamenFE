import React, {useRef} from 'react';

function AdminPageDelete({login}) {

    const inputRef = useRef();
    console.log(inputRef.current)

    return (
        <div>
            <h1>AdminPageDelete</h1>
            <form>
                <input
                    ref={inputRef}
                    required
                    type="AdminPageDelete"
                    placeholder="AdminPageDelete...."
                />
                <button
                    type="submit"
                    onClick={() => {
                        inputRef.current.focus()
                    }}
                >Submit</button>
            </form>
        </div>
    );
}

export default AdminPageDelete;
