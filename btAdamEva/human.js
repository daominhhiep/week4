let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setApple = function (Apple) {
        this.Apple = Apple;
    }
    this.Say = function (String) {
        console.log(String);
    }
    this.checkApple = function () {
        if (!this.Apple.IsEmpty()) return true;
        return false;
    }
    this.Eat = function () {
        if (this.checkApple()) {
            this.weight += 1;
            this.Apple.Decrease();
        } else alert("Apple is empty !")
    }
}