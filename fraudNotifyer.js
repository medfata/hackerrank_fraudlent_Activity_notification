
function get_median(counting_sort_array, trailing_days, median_position){
    let counter =  0, left = 0;
    //find number where we pass through the median 
    while(counter < median_position){
        counter += counting_sort_array[left];
        left += 1;
    }
    //step back one time
     let right = left;
     left  -=1;
     //if odd, or both left and right of even are same number
     if(counter > median_position || trailing_days % 2 == 0)
        return left
    else{
        //find right value for even
        while(counting_sort_array[right] == 0){
            right +=1;
        }
        return (right + left) / 2;
    }
}

function fraudNottifyer(expendatures, trailing_days){
    //intializing counting_sort_array
    let couting_sort_array = new Array(201).fill(0);
    let end = trailing_days;
    //perforf counting sort
    for(let i =0; i< end; i++){
        couting_sort_array[expendatures[i]] +=1;
    }
    let current=0;
    let total_notifications = 0;

    //determining odd or even median position
    let median_position;
    if(trailing_days % 2 == 0)
         median_position = Number(trailing_days/2);
    else
         median_position = Math.floor(trailing_days/2) +1;

    let total_expendatures = expendatures.length;
    //satrt and move along expendatures list
    while(end < total_expendatures ){
        let median = get_median(couting_sort_array, trailing_days, median_position);
        if(expendatures[end] >= 2*median)
            total_notifications +=1;
        
        //modify the queue first in first out
        couting_sort_array[expendatures[current]] -=1;
        couting_sort_array[expendatures[end]] +=1;
        current +=1;
        end +=1;
    }

    return total_notifications;
}

console.log(fraudNottifyer([10,20,30,40,50], 3))