//Given an array A of positive integers your task is to find the leader in the array
// An element of array is leader if it is greater than or equal to all
//to all the element to its right side the side the right most element is always a leader

Array=[16,17,4,3,5,2]

    for( i=0 ; i<x ; i++){
        for(j=i+1 ; j<x ; j++){
            if(array[j]>=array[i]){
                break;
            }
            else if (j==x){
                print("is leader")
            }

        }
    }

    int num = arr[n-1];
    for(i=n-2; i>=0; i--){
        if(arr[i] > num){
            print("is leader");
            num = arr[i]
        }
    }




