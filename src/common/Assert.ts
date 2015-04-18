

function assert(b: boolean, msg: string) {
    if (!b) {
        throw new Error(msg);
    }
}

function assertState(obj: any, s: String) {
    var msg = obj.toString();
    msg += " expecting state: " + s.toString() + "; " 
    msg += " instead, the state is: " + obj.sm.GetCurrentState() + "."
    assert(obj.sm.StateIs(s.toString()), msg)
}
