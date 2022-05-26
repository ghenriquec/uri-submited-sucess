using System; 

class URI {

    static void Main() 
    { 
        int entrada, A, B;
        string valor1, valor2;
        entrada = int.Parse(Console.ReadLine());
        while(entrada-- != 0){
            string[]aux = Console.ReadLine().Split(' ');
            valor1 = aux[0];
            valor2 = aux[1];
            A = valor1.Length;
            B = valor2.Length;
            int i = 0, j = 0, cont = 0;
            if(A < B)
            {
                cont = -1;
            }
            if(cont != -1)
            {
                for(i = B - 1, j = A - 1; i > -1; i--, j--)
                {
                    if(valor2[i] == valor1[j])
                    {
                        cont++;
                    }
                }
            }
            if(B != cont)
            {
                Console.Write("nao encaixa\n");
            }
            else
            {
                Console.Write("encaixa\n");
            }
        }
    }
    
    
}
