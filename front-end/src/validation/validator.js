export default class Validator{
    static isString(value, minChars = 1, maxChars = Infinity){
        if (!value || value.trim().length < minChars || value.trim().length > maxChars) return false
        return true;
    }
}