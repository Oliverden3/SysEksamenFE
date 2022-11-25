import React, {useRef} from 'react';

function AdminPageDelete(props) {

    const inputRef = useRef();
    console.log(inputRef.current)

    return (
        <div>
            <h1>AdminPage</h1>

            <input ref={inputRef} type="text" placeholder="Enter charity ID" />
            <form>
                <button type="submit">Delete</button>
                {/*<button
                    type="submit"
                    onClick={() => {
                        inputRef.current.focus()
                    }}
                >Submit</button>*/}
            </form>
        </div>
    );
}

export default AdminPageDelete;
