

export default function (state = null, action) {
    switch(action.type){
        case 'OPEN_DATA':
            if(action.payload)
                return action.payload;
    }

    return state;
}
