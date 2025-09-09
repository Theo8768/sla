import { useState } from 'react';

interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export function useBuscaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function buscarCEP() {
    const cepLimpo = cep.replace(/\D/g, '');

    console.log('🔍 Buscando CEP:', cepLimpo);

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 dígitos.');
      setEndereco(null);
      return;
    }

    try {
      setLoading(true);
      setErro(null);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      console.log('🌐 Status da requisição:', response.status);

      const dados: Endereco = await response.json();
      console.log('📦 Retorno da API:', dados);

      if (dados.erro) {
        setErro('CEP não encontrado.');
        setEndereco(null);
        return;
      }

      setEndereco(dados);
    } catch (error) {
      console.error('💥 Erro ao buscar CEP:', error);
      setErro('Erro na conexão com a API.');
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  }

  return { cep, setCep, endereco, buscarCEP, erro, loading };
}
