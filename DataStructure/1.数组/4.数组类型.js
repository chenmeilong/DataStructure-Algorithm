//类型数组
// Int8Array	8 位二进制补码整数
// Uint8Array	8 位无符号整数
// Uint8ClampedArray	8 位无符号整数
// Int16Array	16 位二进制补码整数
// Uint16Array	16 位无符号整数
// Int32Array	32 位二进制补码整数
// Uint32Array	32 位无符号整数
// Float32Array	32 位 IEEE 浮点数
// Float64Array	64 位 IEEE 浮点数

let length = 5;
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for (let i=0; i<length; i++){
int16[i] = i+1;
}
console.log(int16);
