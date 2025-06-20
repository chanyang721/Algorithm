function solution(id_pw, db) {
    // [id, pw] = id_pw
    // id = str, lowercase, unique
    // pw = numstr
    // if id, pw ? "login"
    // else if id, !pw = "wrong pw"
    // else if !id = "fail"
    // for db i = 0 -> len
    //     [db_id, db_pw] = db[i]
    var answer = "fail";
    const [id, pw] = id_pw
    for (let i = 0; i < db.length; i++) {
        const [db_id, db_pw] = db[i]
        if (id === db_id && pw === db_pw) {
            answer = "login"
        } else if (id === db_id && pw !== db_pw) {
            answer = "wrong pw"
        }
    }
    
    return answer;
}