
        function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }

        function countingSort(arr) {
            const max = Math.max(...arr);
            const count = new Array(max + 1).fill(0);
            for (let num of arr) {
                count[num]++;
            }
            const output = [];
            for (let i = 0; i < count.length; i++) {
                while (count[i] > 0) {
                    output.push(i);
                    count[i]--;
                }
            }
            return output;
        }

        function insertionSort(arr) {
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        }

        function sortArray() {
            const input = document.getElementById('arrayInput').value;
            const array = input.split(',')
                .map(num => parseInt(num.trim(), 10))
                .filter(num => !isNaN(num)); 

            
            if (array.length === 0) {
                document.getElementById('result').innerText = 'Please enter valid numbers.';
                return;
            }

            const sortMethod = document.getElementById('sortMethod').value;
            let sortedArray;

            switch (sortMethod) {
                case 'bubble':
                    sortedArray = bubbleSort(array);
                    break;
                case 'insertion':
                    sortedArray = insertionSort(array);
                    break;
                case 'counting':
                    sortedArray = countingSort(array);
                    break;
                default:
                    sortedArray = array; // Fallback
            }

            document.getElementById('result').innerText = 'Sorted array: ' + sortedArray.join(', ');
        }
