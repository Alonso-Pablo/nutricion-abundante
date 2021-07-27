import { Header, Form, Nav, InputSearch, SearchButton, MenuButton, Menu, MenuList, MenuOption} from './styled';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState } from 'react';

import { Div } from '../../styles/GlobalStyle'

export default function Navigator({isDeviceCellphone}) {
  const router = useRouter()

  let [ isMenuDisplayed, setIsMenuDisplayed ] = useState(false);

  const handleClick = (state, setState) => {
    setState(!state);
  }
  
  const handleHash = (hashRaw) => {
    hashRaw = hashRaw.replace(/ /g, "").toLowerCase()
  if (hashRaw.includes('aloe')) return hashRaw = 'havgutsdk8'; // Aloe Beta
  if (hashRaw.includes('aqt') || hashRaw.includes('act')) return hashRaw = 'v5izv5wo26'; // Aqtua
  if (hashRaw.includes('bioc') || hashRaw.includes('magn') || hashRaw.includes('vioc')) return hashRaw = 'h8blaufecx'; // Biocros
  if (hashRaw.includes('cafe')) return hashRaw = 'mtxns5d7lh'; // Cafezzino Plus
  if (hashRaw.includes('dolc')) return hashRaw = 'pjt1wax88y'; // Dolcevita Supreme
  if (hashRaw.includes('fruta') || hashRaw.includes('lata')) return hashRaw = 'ja45fsg01r'; // Ego Frutas
  if (hashRaw.includes('10') || hashRaw.includes('diez')) return hashRaw = 'g4n20z9xqv'; // Ego 10
  if (hashRaw.includes('herbal')) return hashRaw = 'nekmvtn4qc'; // Ego herbal
  if (hashRaw.includes('egolife')) return hashRaw = 'dp85p194jw'; // Ego Life supreme
  if (hashRaw.includes('stop')) return hashRaw = 'nr9t7ccpte'; // Estop plus
  if (hashRaw.includes('fem')) return hashRaw = 'i724pgvlu5'; // fem plus
  if (hashRaw.includes('fiber') || hashRaw.includes('fai')) return hashRaw = 'dwojs605la'; // fiber supreme
  if (hashRaw.includes('focussupreme') || hashRaw.includes('optimussupreme')) return hashRaw = 'sbqwskcch0'; // focus supreme
  if (hashRaw.includes('focu') || hashRaw.includes('optimu')) return hashRaw = 't365os8ghv'; // focus
  if (hashRaw.includes('homo')) return hashRaw = 'nt1dw8veuv'; // homo plus
  if (hashRaw.includes('vkid')) return hashRaw = 'rbpds7ghbt'; // omnilife vkids
  if (hashRaw.includes('sh') || hashRaw.includes('yeik')) return hashRaw = 'j40eykjgp6'; // Shake Supreme
  if (hashRaw.includes('ost') || hashRaw.includes('yeik')) return hashRaw = 'sspcfst3o3'; // Omniost supreme
  if (hashRaw.includes('omniplussupreme')) return hashRaw = 's9omfblcq2';
  if (hashRaw.includes('omniplusbote')) return hashRaw = 'qmxz4dxlq9';
  if (hashRaw.includes('omniplus')) return hashRaw = 'anatste2we';
  if (hashRaw.includes('viu')) return hashRaw = 'zbpxcedlyz';
  if (hashRaw.includes('one') || hashRaw.includes('uanc')) return hashRaw = 'r1y8of8rkx';
  if (hashRaw.includes('powermakerbote')) return hashRaw = 'wtw41dsipr';
  if (hashRaw.includes('power') || hashRaw.includes('poue') || hashRaw.includes('pau')) return hashRaw = 'i1q6k4ikb6';
  if (hashRaw.includes('star')) return hashRaw = 'fcvkjnfb79';
  if (hashRaw.includes('supermixchocolate')) return hashRaw = 'e53d4r3hb8';
  if (hashRaw.includes('supermix')) return hashRaw = 'gtfs2lkmm8';
  if (hashRaw.includes('coffeebote')) return hashRaw = 'rk2squ71zw';
  if (hashRaw.includes('coffe') || hashRaw.includes('cofe')) return hashRaw = 'zwerv8ui7e';
  if (hashRaw.includes('limon') || hashRaw.includes('limón')) return hashRaw = 'w9as4biz39';
  if (hashRaw.includes('uya') || hashRaw.includes('uyá') || hashRaw.includes('ullá')) return hashRaw = 'euayazcur0';
  if (hashRaw.includes('uzo') || hashRaw.includes('uso')) return hashRaw = 'eurerg4ur0';
  return hashRaw = undefined;
}

  const handleForm = (e) => {
    e.preventDefault();
    const hash = handleHash(e.target.search.value);
    router.push({
      // pathname: `http://localhost:3000/products`, // Dev
      pathname: `https://nutricion-abundante.vercel.app/products`,
      query: { id: hash}
    })

  }

  return (
    <>
      <Header>
        <Nav>

          <Div display="flex" flexGrow="1">
            <Link title="Volver al inicio" href="/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="50" viewBox="0 0 30 34" fill="none">
                  <path d="M1.75 8.35H6L12.9 20.025V8.35H16.225V25H12.025L5.075 13.25V25H1.75V8.35Z" fill="white"/>
                  <path d="M19.275 8.35H23.625L29.8 25H26.05L24.7 21.2H18.15L16.875 25H13.175L19.275 8.35ZM23.625 18.1L21.375 11.725L19.2 18.1H23.625Z" fill="#FE9925"/>
                </svg>
              </a>
            </Link>
          </Div>

          <Form onSubmit={handleForm}>
          
            <InputSearch
              aria-label="search"
              aria-required
              required
              type="search"
              name="search"
              id="search"
              placeholder="Buscar Producto..."
            />

            <SearchButton type="submit" >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9.08906 0C4.06875 0 0 4.09273 0 9.14263C0 14.1925 4.06875 18.2853 9.08906 18.2853C14.1094 18.2853 18.1781 14.1925 18.1781 9.14263C18.1781 4.09273 14.1094 0 9.08906 0ZM9.11719 15.923C5.40469 15.923 2.39062 12.8959 2.39062 9.15678C2.39062 5.41768 5.40469 2.39528 9.11719 2.39528C12.8297 2.39528 15.8437 5.4224 15.8437 9.15678C15.8437 12.8912 12.8344 15.923 9.11719 15.923Z" />
                <path d="M15.0504 15.8818L16.7109 17.5522L17.5926 16.6653L15.932 14.995L15.0504 15.8818Z" />
                <path d="M18.9234 16.9367L23.5921 21.633C24.1312 22.1753 24.1312 23.0475 23.5921 23.5898C23.0531 24.132 22.1859 24.132 21.6468 23.5898L16.9781 18.8935C16.439 18.3513 16.439 17.479 16.9781 16.9367C17.5172 16.3992 18.3843 16.3992 18.9234 16.9367Z" />
              </svg>
            </SearchButton>
            
          </Form>

          { isDeviceCellphone
            ? 
            <>
              <MenuButton title="Desplegar el menú" onClick={() => handleClick(isMenuDisplayed, setIsMenuDisplayed)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 20" fill="none">
                  <rect width="25" height="3" fill="white"/>
                  <rect y="8" x="3" width="25" height="3" fill="white"/>
                  <rect y="16" x="3" width="25" height="3" fill="white"/>
                </svg>
              </MenuButton>

              { isMenuDisplayed &&
                <Menu>

                  <MenuList>

                    <MenuOption>
                      <Link href="/products">
                        PRODUCTOS
                      </Link>
                    </MenuOption>

                    <MenuOption>
                      <Link href="/join">
                        QUIERO UNIRME
                      </Link>
                    </MenuOption>

                    <MenuOption>
                      <Link href="/about">
                        SOBRE NOSOTROS
                      </Link>
                    </MenuOption>

                  </MenuList>

                </Menu>
              }
            </>
            :
            <>
              <Menu>

                <MenuList>

                    <MenuOption>
                      <Link href="/products">
                        PRODUCTOS
                      </Link>
                    </MenuOption>

                    <MenuOption>
                      <Link href="/join">
                        QUIERO UNIRME
                      </Link>
                    </MenuOption>

                    <MenuOption>
                      <Link href="/about">
                        SOBRE NOSOTROS
                      </Link>
                    </MenuOption>

                </MenuList>

              </Menu>
            </>
          }
        </Nav>
      </Header>
    </>
  )
}