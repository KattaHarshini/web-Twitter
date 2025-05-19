document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
        {
    "question": "1. Longest Substring Without Repeating Characters",
    "description": "Checks string manipulation and sliding window technique.",
    "hint": "Use a sliding window and a HashSet to track characters.",
    "answer": `
<pre><code class="language-java">
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, max = 0;
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left++));
        }
        set.add(s.charAt(right));
        max = Math.max(max, right - left + 1);
    }
    return max;
}
</code></pre>
    `
  },
  {
    "question": "2. Twitter Tweet Count Tracker",
    "description": "Simulates a real-world Twitter use-case — tweet count tracking per user.",
    "hint": "Use a HashMap with username as key and tweet count as value.",
    "answer": `
<pre><code class="language-java">
class TweetCounter {
    private Map<String, Integer> tweetMap = new HashMap<>();

    public void tweet(String user) {
        tweetMap.put(user, tweetMap.getOrDefault(user, 0) + 1);
    }

    public int getTweetCount(String user) {
        return tweetMap.getOrDefault(user, 0);
    }
}
</code></pre>
    `
  },
  {
    "question": "3. Detect Cycle in a Directed Graph",
    "description": "Tests understanding of DFS and cycle detection.",
    "hint": "Use DFS with visited and recursion stack arrays.",
    "answer": `
<pre><code class="language-java">
public boolean hasCycle(int V, List<List<Integer>> adj) {
    boolean[] visited = new boolean[V];
    boolean[] recStack = new boolean[V];

    for (int i = 0; i < V; i++)
        if (dfs(i, adj, visited, recStack))
            return true;
    return false;
}

private boolean dfs(int node, List<List<Integer>> adj, boolean[] visited, boolean[] recStack) {
    if (recStack[node]) return true;
    if (visited[node]) return false;

    visited[node] = true;
    recStack[node] = true;

    for (int neighbor : adj.get(node)) {
        if (dfs(neighbor, adj, visited, recStack)) return true;
    }

    recStack[node] = false;
    return false;
}
</code></pre>
    `
  },
  {
    "question": "4. Merge Two Sorted Arrays",
    "description": "Classic array merging test.",
    "hint": "Use two pointers to merge in-place.",
    "answer": `
<pre><code class="language-java">
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}
</code></pre>
    `
  },
  {
    "question": "5. Find Kth Largest Element",
    "description": "Tests priority queues (heaps).",
    "hint": "Use a min-heap of size k.",
    "answer": `
<pre><code class="language-java">
public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    for (int num : nums) {
        pq.offer(num);
        if (pq.size() > k) pq.poll();
    }
    return pq.peek();
}
</code></pre>
    `
  },
  {
    "question": "6. Valid Parentheses",
    "description": "Tests stack usage and expression validation.",
    "hint": "Use a stack and push when you see an open bracket.",
    "answer": `
<pre><code class="language-java">
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}
</code></pre>
    `
  },
  {
    "question": "7. Group Anagrams",
    "description": "Tests hash maps and string sorting.",
    "hint": "Group by sorted string keys.",
    "answer": `
<pre><code class="language-java">
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        String key = new String(arr);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}
</code></pre>
    `
  },
  {
    "question": "8. Binary Tree Level Order Traversal",
    "description": "Checks BFS and tree traversal knowledge.",
    "hint": "Use a queue to traverse by level.",
    "answer": `
<pre><code class="language-java">
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}
</code></pre>
    `
  },
  {
    "question": "9. Maximum Subarray (Kadane’s Algorithm)",
    "description": "Tests dynamic programming and array understanding.",
    "hint": "Track current sum and update global max.",
    "answer": `
<pre><code class="language-java">
public int maxSubArray(int[] nums) {
    int max = nums[0], curr = nums[0];
    for (int i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }
    return max;
}
</code></pre>
    `
  },
  {
    "question": "10. LRU Cache",
    "description": "Tests understanding of HashMap + LinkedList design.",
    "hint": "Use LinkedHashMap or custom doubly linked list with map.",
    "answer": `
<pre><code class="language-java">
class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }

    public int get(int key) {
        return super.getOrDefault(key, -1);
    }

    public void put(int key, int value) {
        super.put(key, value);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}
</code></pre>
    `
  },
  {
    "question": "11. Rotate Array",
    "description": "Tests array manipulation and modular indexing.",
    "hint": "Reverse parts of the array to achieve rotation.",
    "answer": `
<pre><code class="language-java">
public void rotate(int[] nums, int k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
}
</code></pre>
    `
  },
  {
    "question": "12. Number of Islands",
    "description": "Checks DFS/BFS on 2D grids.",
    "hint": "Use DFS to sink connected land.",
    "answer": `
<pre><code class="language-java">
public int numIslands(char[][] grid) {
    int count = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

private void dfs(char[][] grid, int i, int j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0')
        return;
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}
</code></pre>
    `
  },
  {
    "question": "13. Find Peak Element",
    "description": "Tests binary search in arrays.",
    "hint": "Use binary search to find a peak.",
    "answer": `
<pre><code class="language-java">
public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[mid + 1])
            right = mid;
        else
            left = mid + 1;
    }
    return left;
}
</code></pre>
    `
  },
  {
    "question": "14. Find the Duplicate Number",
    "description": "Detects cycle using Floyd’s Tortoise and Hare.",
    "hint": "Treat array as linked list.",
    "answer": `
<pre><code class="language-java">
public int findDuplicate(int[] nums) {
    int slow = nums[0], fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}
</code></pre>
    `
  },
  {
    "question": "15. Top K Frequent Elements",
    "description": "Tests frequency counting and heap usage.",
    "hint": "Use a hashmap and a max-heap.",
    "answer": `
<pre><code class="language-java">
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> freqMap = new HashMap<>();
    for (int num : nums) freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);

    PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> freqMap.get(b) - freqMap.get(a));
    pq.addAll(freqMap.keySet());

    int[] result = new int[k];
    for (int i = 0; i < k; i++) result[i] = pq.poll();

    return result;
}
</code></pre>
    `
  },
  {
    "question": "16. Search in Rotated Sorted Array",
    "description": "Binary search in a rotated sorted array.",
    "hint": "Modify binary search based on array rotation.",
    "answer": `
<pre><code class="language-java">
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
}
</code></pre>
    `
  },
  {
    "question": "17. Minimum Window Substring",
    "description": "Checks sliding window with string and map.",
    "hint": "Use two pointers and a frequency map.",
    "answer": `
<pre><code class="language-java">
public String minWindow(String s, String t) {
    Map<Character, Integer> map = new HashMap<>();
    for (char c : t.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);

    int left = 0, count = 0, minLen = Integer.MAX_VALUE, start = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (map.containsKey(c)) {
            map.put(c, map.get(c) - 1);
            if (map.get(c) >= 0) count++;
        }

        while (count == t.length()) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            char leftChar = s.charAt(left++);
            if (map.containsKey(leftChar)) {
                if (map.get(leftChar) == 0) count--;
                map.put(leftChar, map.get(leftChar) + 1);
            }
        }
    }

    return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}
</code></pre>
    `
  },
  {
    "question": "18. Subsets",
    "description": "Tests recursion and backtracking.",
    "hint": "Use DFS or backtracking.",
    "answer": `
<pre><code class="language-java">
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, 0, new ArrayList<>(), result);
    return result;
}

private void backtrack(int[] nums, int start, List<Integer> temp, List<List<Integer>> result) {
    result.add(new ArrayList<>(temp));
    for (int i = start; i < nums.length; i++) {
        temp.add(nums[i]);
        backtrack(nums, i + 1, temp, result);
        temp.remove(temp.size() - 1);
    }
}
</code></pre>
    `
  },
  {
    "question": "19. Serialize and Deserialize Binary Tree",
    "description": "Tree traversal and string manipulation.",
    "hint": "Use pre-order for serialize and deserialize.",
    "answer": `
<pre><code class="language-java">
public class Codec {
    public String serialize(TreeNode root) {
        if (root == null) return "X,";
        return root.val + "," + serialize(root.left) + serialize(root.right);
    }

    private int index = 0;
    public TreeNode deserialize(String data) {
        String[] nodes = data.split(",");
        return buildTree(nodes);
    }

    private TreeNode buildTree(String[] nodes) {
        if (nodes[index].equals("X")) {
            index++;
            return null;
        }
        TreeNode node = new TreeNode(Integer.parseInt(nodes[index++]));
        node.left = buildTree(nodes);
        node.right = buildTree(nodes);
        return node;
    }
}
</code></pre>
    `
  },
  {
    "question": "20. Course Schedule (Topological Sort)",
    "description": "Graph traversal and cycle detection.",
    "hint": "Use Kahn’s algorithm (BFS) or DFS with visited states.",
    "answer": `
<pre><code class="language-java">
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> graph = new ArrayList<>();
    int[] indegree = new int[numCourses];
    for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());

    for (int[] pre : prerequisites) {
        graph.get(pre[1]).add(pre[0]);
        indegree[pre[0]]++;
    }

    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) queue.offer(i);
    }

    int count = 0;
    while (!queue.isEmpty()) {
        int curr = queue.poll();
        count++;
        for (int next : graph.get(curr)) {
            if (--indegree[next] == 0) queue.offer(next);
        }
    }

    return count == numCourses;
}
</code></pre>
    `
  },
  {
    "question": "21. Group Anagrams",
    "description": "Group words that are anagrams of each other.",
    "hint": "Use a hashmap with sorted strings as keys.",
    "answer": `
<pre><code class="language-java">
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        String key = new String(arr);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}
</code></pre>
    `
  },
  {
    "question": "22. Climbing Stairs",
    "description": "A classic dynamic programming problem.",
    "hint": "Use Fibonacci sequence logic.",
    "answer": `
<pre><code class="language-java">
public int climbStairs(int n) {
    if (n <= 2) return n;
    int one = 1, two = 2;
    for (int i = 3; i <= n; i++) {
        int temp = one + two;
        one = two;
        two = temp;
    }
    return two;
}
</code></pre>
    `
  },
  {
    "question": "23. Valid Parentheses",
    "description": "Check if a string has valid open-close brackets.",
    "hint": "Use a stack to track opening brackets.",
    "answer": `
<pre><code class="language-java">
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}
</code></pre>
    `
  },
  {
    "question": "24. Merge Two Sorted Lists",
    "description": "Merge two sorted linked lists.",
    "hint": "Use recursion or iterative merge with dummy node.",
    "answer": `
<pre><code class="language-java">
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0), current = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}
</code></pre>
    `
  },
  {
    "question": "25. Maximum Depth of Binary Tree",
    "description": "Finds the maximum depth using recursion.",
    "hint": "Use DFS recursion to track max depth.",
    "answer": `
<pre><code class="language-java">
public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
</code></pre>
    `
  },
  {
    "question": "1. How do you handle criticism in a fast-paced environment like Twitter?",
    "description": "Evaluates emotional intelligence and adaptability in high-pressure settings.",
    "hint": "Focus on how you accept feedback positively and use it to grow.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<p>I see criticism as an opportunity to learn and improve. At Twitter, where things move fast, I know it's important to be open to feedback. I make it a point to listen carefully, understand the intent, and implement changes quickly when needed. It helps me grow and contribute more effectively to the team.</p>
    `
  },
  {
    "question": "2. What does 'real-time communication' mean to you, and how would you contribute to that at Twitter?",
    "description": "Tests understanding of Twitter's core mission and your alignment with it.",
    "hint": "Reflect on the importance of immediacy, relevance, and global reach.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<p>Real-time communication is about connecting people instantly with timely and relevant information. At Twitter, I would contribute by ensuring features I work on are responsive, scalable, and align with user needs for speed and accuracy. I’d also support initiatives that enhance user engagement through immediate interaction.</p>
    `
  },
  {
    "question": "3. Describe a time you had to manage conflicting priorities. How did you decide what to do first?",
    "description": "Assesses time management and decision-making skills.",
    "hint": "Use the STAR method — Situation, Task, Action, Result.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<p>In college, I had to deliver a project while studying for finals. I prioritized based on deadlines and complexity. I broke the project into parts, finished the critical sections first, and studied in focused sprints. The project was delivered early and I performed well on exams, thanks to clear planning and discipline.</p>
    `
  },
  {
    "question": "4. How do you stay updated with the tech industry and social media trends?",
    "description": "Reveals how proactive and curious you are about the industry.",
    "hint": "Mention specific sources like newsletters, blogs, or communities.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<p>I follow industry blogs like TechCrunch, Twitter Engineering, and Hacker News. I’m also part of developer communities on Reddit and Discord. This helps me stay informed about updates, trends, and innovations, especially in social media platforms like Twitter.</p>
    `
  },
  {
    "question": "5. If you could change one thing about Twitter, what would it be and why?",
    "description": "Tests creativity, critical thinking, and understanding of the product.",
    "hint": "Give constructive feedback and suggest a value-adding idea.",
    "answer": `
<p><strong>Sample Answer:</strong></p>
<p>If I could change one thing, I’d enhance the filtering and customization of the feed. Giving users more control over what they see — like prioritizing types of tweets or topics — would improve engagement and reduce noise, especially during high-volume events.</p>
    `
  }


    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});