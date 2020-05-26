import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
class LogService {
    log(s: string) {
        console.log(s)
    }
}
export default LogService;