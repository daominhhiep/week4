let Apple = function () {
    this.weight = 10;
    this.Decrease = function () {
        this.weight-=1;
    }
    this.IsEmpty = function () {
        if (this.weight==0) return true;
        return false;
    }
    this.getWeight = function () {
        return this.weight;
    }
}