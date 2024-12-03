function merge(nums1, m, nums2, n) {
    if( (m < 0 || n > 200) || (n+m < 1 || n+m > 200 ) ){
        throw new Error('value range not correct') 
    }
    if(nums1.filter(item => item > 1e9).length > 0 ||  nums2.filter(item => item > 1e9).length > 0){
        throw new Error('Values inside array too big')
    }
    let p1 =  n === 0 ? 0 : n-1;
    let p2 =  m === 0 ? 0 : m-1;
    let p = n + m -1;
 
    while (p >= 0) {
        if(nums1[p1] < nums2[p2]){
            nums1[p] = nums2[p2] 
            p2--;
        }else{
            nums1[p] = nums1[p1]
            p1--;
        }
        p--;
        
    }
    return nums1
}

let nums1 = [1,2,3];
let nums2 = [2,5,6];

console.log(merge(nums1, nums1.length, nums2,nums2.length))


nums1 = [1];
nums2 = [];

console.log(merge(nums1, nums1.length, nums2,nums2.length))


nums1 = [0];
nums2 = [1];

console.log(merge(nums1, 0, nums2, nums2.length))