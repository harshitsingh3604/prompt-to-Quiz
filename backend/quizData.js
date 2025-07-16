
  const quizData = [
    
    {
      topic: "OOPs",
      difficulty: "Easy",
      language: "English",
      questions: [
        {
          question: "What does OOP stand for?",
          options: [
            "Object-Oriented Programming",
            "Only One Program",
            "Optional Output Program",
            "Object Operation Process"
          ],
          answer: "Object-Oriented Programming"
        },
        {
          question: "Which of the following is not an OOP concept?",
          options: [
            "Encapsulation",
            "Polymorphism",
            "Compilation",
            "Inheritance"
          ],
          answer: "Compilation"
        },
        {
          question: "Which feature of OOP is aimed at bundling data and functions together?",
          options: [
            "Polymorphism",
            "Abstraction",
            "Encapsulation",
            "Inheritance"
          ],
          answer: "Encapsulation"
        },
        {
          question: "In OOP, objects are instances of:",
          options: [
            "Class",
            "Method",
            "Loop",
            "Variable"
          ],
          answer: "Class"
        },
        {
          question: "Which language is not object-oriented?",
          options: [
            "Java",
            "C++",
            "Python",
            "C"
          ],
          answer: "C"
        }
      ]
    },
    {
      topic: "OOPs",
      difficulty: "Medium",
      language: "English",
      questions: [
        {
          question: "What is method overloading?",
          options: [
            "Same method name with different parameters",
            "Same class used twice",
            "Different method names",
            "Overriding parent methods"
          ],
          answer: "Same method name with different parameters"
        },
        {
          question: "Which concept allows using the same interface for different underlying forms?",
          options: [
            "Abstraction",
            "Inheritance",
            "Polymorphism",
            "Encapsulation"
          ],
          answer: "Polymorphism"
        },
        {
          question: "What is abstraction in OOP?",
          options: [
            "Hiding internal details",
            "Copying data",
            "Using inherited properties",
            "None"
          ],
          answer: "Hiding internal details"
        },
        {
          question: "Which keyword is used for inheritance in Java?",
          options: [
            "this",
            "super",
            "extends",
            "implements"
          ],
          answer: "extends"
        },
        {
          question: "Which concept describes the ability of different classes to respond to the same method call differently?",
          options: [
            "Polymorphism",
            "Abstraction",
            "Inheritance",
            "Overloading"
          ],
          answer: "Polymorphism"
        }
      ]
    },
    {
      topic: "OOPs",
      difficulty: "Hard",
      language: "English",
      questions: [
        {
          question: "Which principle helps reduce software complexity and increases reusability?",
          options: [
            "Polymorphism",
            "Inheritance",
            "Encapsulation",
            "Abstraction"
          ],
          answer: "Abstraction"
        },
        {
          question: "What happens when a subclass overrides a method of the superclass?",
          options: [
            "It inherits functionality",
            "It hides the method",
            "It redefines the method",
            "Nothing"
          ],
          answer: "It redefines the method"
        },
        {
          question: "Which of the following is not a type of inheritance in OOP?",
          options: [
            "Multiple",
            "Multilevel",
            "Hierarchical",
            "Dual"
          ],
          answer: "Dual"
        },
        {
          question: "What is dynamic method dispatch?",
          options: [
            "Compile-time binding",
            "Run-time polymorphism",
            "Static linking",
            "Operator overloading"
          ],
          answer: "Run-time polymorphism"
        },
        {
          question: "Which access specifier makes members accessible only within the same class?",
          options: [
            "private",
            "public",
            "protected",
            "default"
          ],
          answer: "private"
        }
      ]
    },
    {
      topic: "System Design",
      difficulty: "Easy",
      language: "English",
      questions: [
        {
          question: "What is the main goal of system design?",
          options: [
            "To build scalable systems",
            "To write code",
            "To compile programs",
            "To test software"
          ],
          answer: "To build scalable systems"
        },
        {
          question: "What is a load balancer?",
          options: [
            "A device to balance traffic",
            "A programming language",
            "A compiler",
            "A debugger"
          ],
          answer: "A device to balance traffic"
        },
        {
          question: "Which one is an example of a distributed system?",
          options: [
            "Google Search",
            "MS Paint",
            "Notepad",
            "Calculator"
          ],
          answer: "Google Search"
        },
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Advanced Programming Interface",
            "Application Program Index",
            "Applied Programming Internet"
          ],
          answer: "Application Programming Interface"
        },
        {
          question: "Which database type is best for hierarchical data?",
          options: [
            "NoSQL",
            "SQL",
            "Graph",
            "Flat file"
          ],
          answer: "Graph"
        }
      ]
    },
    {
      topic: "System Design",
      difficulty: "Medium",
      language: "English",
      questions: [
        {
          question: "What is horizontal scaling?",
          options: [
            "Adding more servers",
            "Adding more CPUs",
            "Increasing RAM",
            "Replacing hard drive"
          ],
          answer: "Adding more servers"
        },
        {
          question: "Which protocol is used for HTTP communication?",
          options: [
            "TCP",
            "UDP",
            "FTP",
            "SMTP"
          ],
          answer: "TCP"
        },
        {
          question: "Which cache strategy removes the least recently used item?",
          options: [
            "LRU",
            "FIFO",
            "LIFO",
            "MRU"
          ],
          answer: "LRU"
        },
        {
          question: "What is CDN used for?",
          options: [
            "Distributing content globally",
            "Compressing images",
            "Encrypting data",
            "Writing code"
          ],
          answer: "Distributing content globally"
        },
        {
          question: "Which component handles database read operations?",
          options: [
            "Read replica",
            "Write master",
            "Cache",
            "Load balancer"
          ],
          answer: "Read replica"
        }
      ]
    },
    {
      topic: "System Design",
      difficulty: "Hard",
      language: "English",
      questions: [
        {
          question: "What is eventual consistency?",
          options: [
            "Data is consistent after some time",
            "Data is always consistent",
            "Data never changes",
            "Data is inconsistent"
          ],
          answer: "Data is consistent after some time"
        },
        {
          question: "Which system design technique improves fault tolerance?",
          options: [
            "Redundancy",
            "Single server",
            "Multithreading",
            "Parallelism"
          ],
          answer: "Redundancy"
        },
        {
          question: "What is sharding in databases?",
          options: [
            "Partitioning data across servers",
            "Encrypting data",
            "Compressing queries",
            "Data replication"
          ],
          answer: "Partitioning data across servers"
        },
        {
          question: "What does CAP theorem stand for?",
          options: [
            "Consistency, Availability, Partition Tolerance",
            "Cache, API, Partition",
            "Compute, API, Processing",
            "Consistency, Access, Performance"
          ],
          answer: "Consistency, Availability, Partition Tolerance"
        },
        {
          question: "Which is a message queue system?",
          options: [
            "RabbitMQ",
            "Redis",
            "MySQL",
            "Elasticsearch"
          ],
          answer: "RabbitMQ"
        }
      ]
    },
    {
      topic: "DBMS",
      difficulty: "Easy",
      language: "English",
      questions: [
        {
          question: "What does DBMS stand for?",
          options: [
            "Database Management System",
            "Data Block Management Server",
            "Data Build Mechanism Server",
            "Database Mail System"
          ],
          answer: "Database Management System"
        },
        {
          question: "Which language is used to query databases?",
          options: [
            "SQL",
            "HTML",
            "CSS",
            "JavaScript"
          ],
          answer: "SQL"
        },
        {
          question: "Which of the following is a DBMS software?",
          options: [
            "MySQL",
            "Photoshop",
            "Chrome",
            "Excel"
          ],
          answer: "MySQL"
        },
        {
          question: "Primary key is used to?",
          options: [
            "Uniquely identify a record",
            "Store files",
            "Encrypt passwords",
            "Show table data"
          ],
          answer: "Uniquely identify a record"
        },
        {
          question: "Which one is NOT a DBMS?",
          options: [
            "Oracle",
            "MySQL",
            "MongoDB",
            "Google Docs"
          ],
          answer: "Google Docs"
        }
      ]
    },
    {
      topic: "DBMS",
      difficulty: "Medium",
      language: "English",
      questions: [
        {
          question: "Which command is used to remove a table?",
          options: [
            "DROP",
            "DELETE",
            "REMOVE",
            "CLEAR"
          ],
          answer: "DROP"
        },
        {
          question: "Normalization is used to?",
          options: [
            "Reduce redundancy",
            "Create reports",
            "Improve UI",
            "Encrypt data"
          ],
          answer: "Reduce redundancy"
        },
        {
          question: "What is a foreign key?",
          options: [
            "Key from another table",
            "Encrypted key",
            "Primary key alias",
            "Key to delete rows"
          ],
          answer: "Key from another table"
        },
        {
          question: "Which form removes partial dependencies?",
          options: [
            "2NF",
            "1NF",
            "3NF",
            "BCNF"
          ],
          answer: "2NF"
        },
        {
          question: "Which DBMS supports document storage?",
          options: [
            "MongoDB",
            "MySQL",
            "Oracle",
            "SQLite"
          ],
          answer: "MongoDB"
        }
      ]
    },
    {
      topic: "DBMS",
      difficulty: "Hard",
      language: "English",
      questions: [
        {
          question: "What is the purpose of ACID properties?",
          options: [
            "Ensure transaction reliability",
            "Compress data",
            "Improve speed",
            "Create indexes"
          ],
          answer: "Ensure transaction reliability"
        },
        {
          question: "Which isolation level is most strict?",
          options: [
            "Serializable",
            "Repeatable Read",
            "Read Committed",
            "Read Uncommitted"
          ],
          answer: "Serializable"
        },
        {
          question: "Which indexing method is used in large databases?",
          options: [
            "B-tree",
            "Linked list",
            "Array",
            "Hash Table"
          ],
          answer: "B-tree"
        },
        {
          question: "What is the role of a transaction log?",
          options: [
            "Record all DB changes",
            "Store passwords",
            "Backup files",
            "Index tables"
          ],
          answer: "Record all DB changes"
        },
        {
          question: "Which normal form removes transitive dependencies?",
          options: [
            "3NF",
            "1NF",
            "2NF",
            "4NF"
          ],
          answer: "3NF"
        }
      ]
    },
    {
      topic: "SQL",
      difficulty: "Easy",
      language: "English",
      questions: [
        {
          question: "Which SQL command is used to fetch data?",
          options: [
            "SELECT",
            "GET",
            "FETCH",
            "QUERY"
          ],
          answer: "SELECT"
        },
        {
          question: "Which keyword is used for sorting?",
          options: [
            "ORDER BY",
            "SORT",
            "GROUP BY",
            "ARRANGE"
          ],
          answer: "ORDER BY"
        },
        {
          question: "Which clause is used with WHERE to combine conditions?",
          options: [
            "AND",
            "JOIN",
            "SET",
            "TO"
          ],
          answer: "AND"
        },
        {
          question: "Which SQL function gives number of rows?",
          options: [
            "COUNT()",
            "SUM()",
            "MAX()",
            "TOTAL()"
          ],
          answer: "COUNT()"
        },
        {
          question: "Which data type is used for text in SQL?",
          options: [
            "VARCHAR",
            "INT",
            "BOOLEAN",
            "FLOAT"
          ],
          answer: "VARCHAR"
        }
      ]
    },
    {
      topic: "SQL",
      difficulty: "Medium",
      language: "English",
      questions: [
        {
          question: "What does INNER JOIN do?",
          options: [
            "Matches rows in both tables",
            "Deletes duplicate data",
            "Copies rows",
            "Updates data"
          ],
          answer: "Matches rows in both tables"
        },
        {
          question: "How do you rename a column?",
          options: [
            "AS",
            "LIKE",
            "RENAME",
            "CHANGECOLUMN"
          ],
          answer: "AS"
        },
        {
          question: "What is a subquery?",
          options: [
            "A query within a query",
            "Outer join",
            "Stored procedure",
            "View"
          ],
          answer: "A query within a query"
        },
        {
          question: "Which function returns current date?",
          options: [
            "CURRENT_DATE",
            "NOW()",
            "SYSDATE",
            "TODAY()"
          ],
          answer: "CURRENT_DATE"
        },
        {
          question: "Which command creates a new table?",
          options: [
            "CREATE TABLE",
            "MAKE TABLE",
            "NEW TABLE",
            "ADD TABLE"
          ],
          answer: "CREATE TABLE"
        }
      ]
    },
    {
      topic: "SQL",
      difficulty: "Hard",
      language: "English",
      questions: [
        {
          question: "What does the HAVING clause filter?",
          options: [
            "Groups",
            "Rows",
            "Columns",
            "Indexes"
          ],
          answer: "Groups"
        },
        {
          question: "Which SQL command removes duplicates?",
          options: [
            "SELECT DISTINCT",
            "REMOVE DUPLICATE",
            "SELECT UNIQUE",
            "SELECT FIRST"
          ],
          answer: "SELECT DISTINCT"
        },
        {
          question: "Which operator is used for pattern matching?",
          options: [
            "LIKE",
            "=",
            "IN",
            "MATCH"
          ],
          answer: "LIKE"
        },
        {
          question: "What is the purpose of a view?",
          options: [
            "Virtual table",
            "Stored procedure",
            "Backup",
            "Log"
          ],
          answer: "Virtual table"
        },
        {
          question: "What is a stored procedure?",
          options: [
            "Precompiled SQL code",
            "Query with no output",
            "Temporary view",
            "Encrypted command"
          ],
          answer: "Precompiled SQL code"
        }
      ]
    },
    {
      topic: "DSA",
      difficulty: "Easy",
      language: "English",
      questions: [
        {
          question: "Which data structure uses FIFO?",
          options: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
          ],
          answer: "Queue"
        },
        {
          question: "What is the time complexity of binary search?",
          options: [
            "O(log n)",
            "O(n)",
            "O(n^2)",
            "O(1)"
          ],
          answer: "O(log n)"
        },
        {
          question: "Which of the following is a linear data structure?",
          options: [
            "Array",
            "Tree",
            "Graph",
            "Heap"
          ],
          answer: "Array"
        },
        {
          question: "Which data structure uses LIFO?",
          options: [
            "Stack",
            "Queue",
            "List",
            "Array"
          ],
          answer: "Stack"
        },
        {
          question: "What is a node in a linked list?",
          options: [
            "An element",
            "An array",
            "A class",
            "A pointer"
          ],
          answer: "An element"
        }
      ]
    },
    {
      topic: "DSA",
      difficulty: "Medium",
      language: "English",
      questions: [
        {
          "question": "What is the space complexity of a stack?",
          "options": [
            "O(n)",
            "O(1)",
            "O(n^2)",
            "O(log n)"
          ],
          answer: "O(n)"
        },
        {
          question: "Which algorithm is used in quicksort?",
          options: [
            "Divide and conquer",
            "Dynamic programming",
            "Greedy",
            "Backtracking"
          ],
          answer: "Divide and conquer"
        },
        {
          question: "Which data structure is best for BFS?",
          options: [
            "Queue",
            "Stack",
            "Tree",
            "Heap"
          ],
          answer: "Queue"
        },
        {
          question: "What is the time complexity of merge sort?",
          options: [
            "O(n log n)",
            "O(n^2)",
            "O(log n)",
            "O(n)"
          ],
          answer: "O(n log n)"
        },
        {
          question: "Which tree traversal visits root before subtrees?",
          options: [
            "Preorder",
            "Inorder",
            "Postorder",
            "Level-order"
          ],
          answer: "Preorder"
        }
      ]
    },
    {
      topic: "DSA",
      difficulty: "Hard",
      language: "English",
      questions: [
        {
          question: "Which problem uses dynamic programming?",
          options: [
            "Knapsack",
            "Sorting",
            "Searching",
            "Traversal"
          ],
          answer: "Knapsack"
        },
        {
          question: "Which is not a self-balancing tree?",
          options: [
            "Binary Search Tree",
            "AVL",
            "Red-Black",
            "Splay"
          ],
          answer: "Binary Search Tree"
        },
        {
          question: "What is the complexity of Dijkstra\u2019s algorithm using a min-heap?",
          options: [
            "O(E log V)",
            "O(V^2)",
            "O(n)",
            "O(log n)"
          ],
          answer: "O(E log V)"
        },
        {
          question: "Which structure is used in DFS?",
          options: [
            "Stack",
            "Queue",
            "Heap",
            "Tree"
          ],
          answer: "Stack"
        },
        {
          question: "What is the best case for quicksort?",
          options: [
            "Pivot always splits evenly",
            "All elements same",
            "Sorted input",
            "Reverse input"
          ],
          answer: "Pivot always splits evenly"
        }
      ]
    }
  ]
  

module.exports = quizData;

  