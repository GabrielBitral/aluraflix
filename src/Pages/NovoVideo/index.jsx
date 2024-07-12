import Titulo from '@/Components/Titulo';
import styles from './NovoVideo.module.css';
import Botao from '@/Components/Botao';
import Campo from '@/Components/Campo';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import { useVideoContext } from '@/hooks/useVideoContext';
import { useContext, useState } from 'react';
import { VideoContext } from '../../Contexts/VideoContext';

const NovoVideo = () => {
    const { categorias } = useContext(VideoContext);
    const { adicionarVideo } = useVideoContext();

    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [link, setLink] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');

    const aoSalvarVideo = (evento) => {
        evento.preventDefault();
        adicionarVideo({titulo, imagem, link, categoria, descricao});
    };

    const limparCampos = (evento) => {
        evento.preventDefault();
        setTitulo('');
        setImagem('');
        setLink('');
        setDescricao('');
        setCategoria('');
    };

    return (
        <section className={styles.container}>
            <Titulo texto='NOVO VÍDEO' cor='clara' />
            <h2 className={styles.subtitulo}>COMPLETE O FORMLÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</h2>
            <form method='post' className={styles.formulario}>
                <div className={styles.alinhadoAoLado}>
                    <Campo valor={titulo} label="Título" placeholder='Título' corBorda='azul' aoTerDigitado={valor => setTitulo(valor)} />
                    <Select valor={categoria} label="Categoria" corBorda='azul' aoSelecionado={valor => setCategoria(valor)}>
                        {categorias.map((categoria) =>
                            <option value={categoria.valor} key={categoria.valor}>
                                {categoria.texto}
                            </option>
                        )}
                    </Select>
                </div>
                <div className={styles.alinhadoAoLado}>
                    <Campo valor={imagem} label="Imagem" placeholder='Imagem' corBorda='azul' aoTerDigitado={valor => setImagem(valor)} />
                    <Campo valor={link} label="Link" placeholder='Link' corBorda='azul' aoTerDigitado={valor => setLink(valor)} />
                </div>
                <TextArea valor={descricao} label="Descrição" placeholder='Descrição' corBorda='azul' aoTerDigitado={valor => setDescricao(valor)} />
                <div className={styles.botoes}>
                    <Botao borda='azul' handleClick={aoSalvarVideo}>SALVAR</Botao>
                    <Botao borda='branca' handleClick={limparCampos}>LIMPAR</Botao>
                </div>
            </form>
        </section>
    );
};

export default NovoVideo;