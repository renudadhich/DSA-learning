/** problem :https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 *  problem statement :
 * It’s New Year’s Day and everyone’s in line for the Wonderland rollercoaster ride! 
 * There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. 
 * Initial positions increment by 1 from 1 at the front of the line to at n the back.
   Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, 
   they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, 
   if n = 8 and person 5 bribes person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
 * Algo :
    1.Iterate through each item of the queue , 
    2.if (q[i] -i+1) > 2 means " too chaotic ", otherwise
    3. while iterating checking every item with previous item ,it is bigger than current item , that means
     bribe happend here and increase count ( variable intialize by 0) by 1.
     4. return either "too chaotic " or number of bribes
    
 * solution :https://stackoverflow.com/questions/53543089/new-year-chaos-hackerrank-practise-problem-c-sharp-solution-optimization
 */
const minimumNumberOfBribes = (queue) => {
  let bribes = 0,
    isChaotic = false;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - (i + 1) > 2) {
      isChaotic = true;
      break;
    }
    for (let j = Math.max(0, queue[i] - 2); j < i; j++) {
      if (queue[j] > queue[i]) bribes++;
    }
  }
  if (isChaotic) console.log('Too Chaotic');
  else console.log('number of bribes', bribes);
};

// const queueBefore , queue = [1,2,3,4,5]; => [1,2,3,5,4] => [1,2,5,3,4]  => [2,1,5,3,4]
const queue = [2, 1, 5, 3, 4];
minimumNumberOfBribes(queue);
const queue2 = [2, 5, 1, 3, 4];
minimumNumberOfBribes(queue2);
