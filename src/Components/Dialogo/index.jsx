import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import Titulo from '../Titulo';
import styles from './Dialogo.module.css';
import fechar from './fechar.png';
import TextArea from '../TextArea';
import Select from '../Select';

const Dialogo = ({ video, aoFechar }) => {
    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState(video.imagem);
    const [link, setLink] = useState(video.link);
    const [descricao, setDescricao] = useState(video.descricao);
    const categorias = [
        {
            valor: 'lol',
            texto: 'LOL'
        }, 
        {
            valor: 'genshin',
            texto: 'GENSHIN'
        },
        {
            valor: 'honkai',
            texto: 'HONKAI S. R.'
        },
    ];

    const aoSalvarVideo = (evento) => {
        evento.preventDefault();
        console.log(evento);
    };

    const limparCampos = (evento) => {
        evento.preventDefault();
        setTitulo('');
        setImagem('');
        setLink('');
        setDescricao('');
    };

    return (
        <>
            {video &&
                <>
                    <div className={styles.overlay} />
                    <dialog open={!!video} onClose={aoFechar}>
                        <div className={styles.containerDialogo}>
                            <form method="dialog" className={styles.fechar}>
                                <Botao formMethod="dialog">
                                    <img src={fechar} alt="Icone de fechar" />
                                </Botao>
                            </form>
                            <Titulo texto="EDITAR DADOS" cor="escura" />
                            <form method='post' className={styles.formulario}>
                                <Campo valor={titulo} label="Título" placeholder='Título' corBorda='azul' aoTerDigitado={valor => setTitulo(valor)} />
                                <Select label="Categoria" corBorda='azul'>
                                    {categorias.map((categoria) => <option value={categoria.valor} key={categoria.valor}>{categoria.texto}</option>)}
                                </Select>
                                <Campo valor={imagem} label="Imagem" placeholder='Imagem' corBorda='azul' aoTerDigitado={valor => setImagem(valor)} />
                                <Campo valor={link} label="Link" placeholder='Link' corBorda='azul' aoTerDigitado={valor => setLink(valor)} />
                                <TextArea valor={descricao} label="Descrição" placeholder='Descrição' corBorda='azul' aoTerDigitado={valor => setDescricao(valor)} />
                                <div className={styles.botoes}>
                                    <Botao handleClick={aoSalvarVideo}>SALVAR</Botao>
                                    <Botao handleClick={limparCampos}>LIMPAR</Botao>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </>
            }
        </>
    );
};

export default Dialogo;